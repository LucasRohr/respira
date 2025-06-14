import { useCallback } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { TextInput } from "react-native-paper";

import { EmptyListResult, Input, LocationAirQualityCard } from "@/components";
import { COLORS } from "@/constants";

import { styles } from "./styles";
import { SEARCH_PAGE_STRINGS } from "./strings";
import { useSearchLocation } from "./hooks";

export const SearchPage = () => {
  const { searchText, handleSearch, searchResult, isLoading, isError, error } =
    useSearchLocation();

  const renderSearchResults = useCallback(() => {
    if (!searchResult) {
      return null;
    }

    if (!searchResult.locationsReports.length) {
      return <EmptyListResult />;
    }

    return (
      <FlatList
        data={searchResult.locationsReports}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <View style={styles.listFooter} />}
        renderItem={({ item }) => {
          const { location, airQualityReport, isFavorite } = item;

          return (
            <LocationAirQualityCard
              id={airQualityReport.id}
              city={location.city}
              name={location.name}
              state={location.state}
              pollutants={airQualityReport.pollutants}
              isFavorite={isFavorite}
            />
          );
        }}
      />
    );
  }, [searchResult]);

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
      <View style={styles.searchResultsContainer}>{renderSearchResults()}</View>
    );
  }, [searchResult, isLoading, isError, error]);

  return (
    <View style={styles.container}>
      <Input
        label={SEARCH_PAGE_STRINGS.INPUT_LABEL}
        placeholder={SEARCH_PAGE_STRINGS.INPUT_PLACEHOLDER}
        rightIcon={
          <TextInput.Icon icon="cloud-search" color={COLORS.primaryLight} />
        }
        onChange={handleSearch}
        value={searchText}
      />
      {renderContent()}
    </View>
  );
};
