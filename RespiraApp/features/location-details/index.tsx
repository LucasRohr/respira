import { useCallback } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

import { COLORS } from "@/constants";

import type { LocationDetailsPageProps } from "./types";
import { useLocationDetails } from "./hooks";
import { styles } from "./styles";
import { AirHistoryCard } from "@/components";
import { LocationHeader } from "./components";
import { LOCATION_DETAILS_STRINGS } from "./strings";

export const LocationDetailsPage = ({
  locationId,
}: LocationDetailsPageProps) => {
  const { locationDetails, isLoading, error, isError } = useLocationDetails(
    parseInt(locationId)
  );

  const renderHeader = useCallback(() => {
    if (!locationDetails?.location) {
      return null;
    }

    const { name, city, state } = locationDetails.location;
    const isFavorite = locationDetails.isFavorite;

    return (
      <LocationHeader
        city={city}
        name={name}
        state={state}
        isFavorite={isFavorite}
      />
    );
  }, [locationDetails?.location, locationDetails?.isFavorite]);

  const renderHistory = useCallback(() => {
    if (!locationDetails?.airQualityHistory) {
      return null;
    }

    return (
      <FlatList
        data={locationDetails.airQualityHistory}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        ListHeaderComponent={() => {
          return (
            <View style={styles.listHeaderContainer}>
              <Text style={styles.listHeaderTitle}>
                {LOCATION_DETAILS_STRINGS.HISTORY_TITLE}
              </Text>
            </View>
          );
        }}
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
  }, [locationDetails?.airQualityHistory]);

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
      <View style={styles.contentWrapper}>
        {renderHeader()}
        {renderHistory()}
      </View>
    );
  }, [locationDetails, isLoading, isError, error]);

  return <View style={styles.container}>{renderContent()}</View>;
};
