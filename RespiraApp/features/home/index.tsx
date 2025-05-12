import { useCallback } from "react";
import { ActivityIndicator, View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { styles } from "./styles";
import { useHomeCompose } from "./hooks";
import { COLORS } from "@/constants";
import { HomeRecommendations } from "./components";

export const HomePage = () => {
  const { user, airHistory, airQuality, mapRegion, isLoading, isError, error } =
    useHomeCompose();

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
        {renderMap()}
        {renderRecommendations()}
      </View>
    );
  }, [isLoading, isError, error]);

  return renderContent();
};
