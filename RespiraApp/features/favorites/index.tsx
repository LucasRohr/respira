import { useCallback } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";

import { EmptyListResult, LocationAirQualityCard } from "@/components";
import { COLORS } from "@/constants";

import { styles } from "./styles";
import { FAVORITES_PAGE_STRINGS } from "./strings";
import { useFavoriteLocations } from "./hooks";

export const FavoritesPage = () => {
  const {
    locations: locationsResult,
    isLoading,
    isError,
    error,
  } = useFavoriteLocations();

  const renderLocations = useCallback(() => {
    if (!locationsResult) {
      return null;
    }

    if (!locationsResult.locations.length) {
      return <EmptyListResult message={FAVORITES_PAGE_STRINGS.EMPTY_LIST} />;
    }

    return (
      <FlatList
        data={locationsResult.locations}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <Text style={styles.text}>{FAVORITES_PAGE_STRINGS.TITLE}</Text>
        )}
        ListFooterComponent={() => <View style={styles.listFooter} />}
        renderItem={({ item }) => {
          const { location, airQualityReport } = item;

          return (
            <LocationAirQualityCard
              id={airQualityReport.id}
              city={location.name}
              state={location.state}
              pollutants={airQualityReport.pollutants}
              isFavorite={true}
            />
          );
        }}
      />
    );
  }, [locationsResult]);

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

    return <View style={styles.container}>{renderLocations()}</View>;
  }, [isLoading, isError, error, renderLocations]);

  return renderContent();
};
