import { useCallback } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

import { COLORS } from "@/constants";

import type { LocationDetailsPageProps } from "./types";
import { useLocationDetails } from "./hooks";
import { styles } from "./styles";
import { AirHistoryCard } from "@/components";
import { LocationDetailsAirQualityCard, LocationHeader } from "./components";
import { LOCATION_DETAILS_STRINGS } from "./strings";
import { useUpdateFavoriteLocation } from "@/hooks";

export const LocationDetailsPage = ({
  locationId,
}: LocationDetailsPageProps) => {
  const { locationDetails, isLoading, error, isError } = useLocationDetails(
    parseInt(locationId)
  );

  const { currentIsFavorite, addFavoriteMutation, removeFavoriteMutation } =
    useUpdateFavoriteLocation({
      defaultIsFavorite: locationDetails?.isFavorite ?? false,
    });

  const onPressFavorite = useCallback(() => {
    const locationId = locationDetails?.location?.id ?? 0;

    if (currentIsFavorite) {
      removeFavoriteMutation.mutate(locationId);
    } else {
      addFavoriteMutation.mutate(locationId);
    }
  }, [
    locationDetails?.location?.id,
    currentIsFavorite,
    addFavoriteMutation,
    removeFavoriteMutation,
  ]);

  const renderHeader = useCallback(() => {
    if (!locationDetails?.location) {
      return null;
    }

    const { name, city, state } = locationDetails.location;

    return (
      <LocationHeader
        city={city}
        name={name}
        state={state}
        isFavorite={currentIsFavorite}
        onPressFavorite={onPressFavorite}
      />
    );
  }, [locationDetails?.location, currentIsFavorite, onPressFavorite]);

  const renderAirQuality = useCallback(() => {
    const hasInvalidData =
      !locationDetails?.airQualityReport && !locationDetails?.recommendations;

    if (hasInvalidData) {
      return null;
    }

    return (
      <LocationDetailsAirQualityCard
        airQualityReport={locationDetails.airQualityReport}
        recommendations={locationDetails.recommendations}
      />
    );
  }, [locationDetails?.airQualityReport, locationDetails?.recommendations]);

  const renderListHeader = useCallback(() => {
    return (
      <>
        {renderHeader()}
        {renderAirQuality()}
        <View style={styles.listHeaderContainer}>
          <Text style={styles.listHeaderTitle}>
            {LOCATION_DETAILS_STRINGS.HISTORY_TITLE}
          </Text>
        </View>
      </>
    );
  }, [renderHeader, renderAirQuality]);

  const renderHistory = useCallback(() => {
    if (!locationDetails?.airQualityHistory) {
      return null;
    }

    return (
      <FlatList
        data={locationDetails.airQualityHistory}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        ListHeaderComponent={renderListHeader}
        ListFooterComponent={() => <View style={styles.listFooter} />}
        ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
        renderItem={({ item }) => {
          const { date, generalSeverity, pollutants } = item;

          return (
            <AirHistoryCard
              date={date}
              generalSeverity={generalSeverity}
              pollutants={pollutants}
              customContainerStyle={styles.historyCard}
            />
          );
        }}
      />
    );
  }, [locationDetails?.airQualityHistory, renderListHeader]);

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

    return <View style={styles.contentWrapper}>{renderHistory()}</View>;
  }, [locationDetails, isLoading, isError, error, renderHistory]);

  return <View style={styles.container}>{renderContent()}</View>;
};
