import { useCallback } from "react";
import { ActivityIndicator, View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import PagerView from "react-native-pager-view";

import { COLORS } from "@/constants";
import { useUpdateFavoriteLocation } from "@/hooks";
import { AirHistoryCard } from "@/components";

import { styles } from "./styles";
import { useHomeCompose } from "./hooks";
import { HomeAirQualityCard, HomeRecommendations } from "./components";

export const HomePage = () => {
  const { user, airHistory, airQuality, mapRegion, isLoading, isError, error } =
    useHomeCompose();

  const { currentIsFavorite, addFavoriteMutation, removeFavoriteMutation } =
    useUpdateFavoriteLocation({
      defaultIsFavorite: airQuality?.isFavorite ?? false,
    });

  const onPressFavorite = useCallback(() => {
    const locationId = airQuality?.location?.id ?? 0;

    if (currentIsFavorite) {
      removeFavoriteMutation.mutate(locationId);
    } else {
      addFavoriteMutation.mutate(locationId);
    }
  }, [
    airQuality?.location?.id,
    currentIsFavorite,
    addFavoriteMutation,
    removeFavoriteMutation,
  ]);

  const renderMap = useCallback(() => {
    return (
      <MapView style={styles.map} region={mapRegion}>
        <Marker
          coordinate={{
            latitude: mapRegion.latitude,
            longitude: mapRegion.longitude,
          }}
        />
      </MapView>
    );
  }, [mapRegion]);

  const renderAirQualityCarousel = useCallback(() => {
    if (!airQuality || !airHistory) {
      return null;
    }

    return (
      <View style={styles.carouselContainer}>
        <PagerView style={styles.carousel} initialPage={0}>
          <HomeAirQualityCard
            key="1"
            city={airQuality?.location.city ?? ""}
            state={airQuality?.location.state ?? ""}
            pollutants={airQuality?.airQualityReport.pollutants ?? []}
            isFavorite={currentIsFavorite}
            onPressFavorite={onPressFavorite}
          />
          {airHistory.reports.map((item, index) => (
            <AirHistoryCard
              key={`${index + 2}`}
              date={item.date}
              generalSeverity={item.generalSeverity}
              pollutants={item.pollutants}
            />
          ))}
        </PagerView>
      </View>
    );
  }, [airQuality, airHistory, currentIsFavorite, onPressFavorite]);

  const renderRecommendations = useCallback(() => {
    if (!airQuality) {
      return null;
    }

    return (
      <HomeRecommendations
        currentAirQuality={airQuality?.airQualityReport.generalSeverity}
        recommendations={airQuality?.recommendations ?? []}
      />
    );
  }, [airQuality]);

  const renderContent = useCallback(() => {
    if (isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      );
    }

    if (isError) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error?.message}</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {renderAirQualityCarousel()}
        {renderMap()}
        {renderRecommendations()}
      </View>
    );
  }, [
    isLoading,
    isError,
    error,
    renderAirQualityCarousel,
    renderMap,
    renderRecommendations,
  ]);

  return renderContent();
};
