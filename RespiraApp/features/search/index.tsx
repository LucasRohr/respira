import { View, Text, ActivityIndicator } from "react-native";
import { TextInput } from "react-native-paper";

import { Input } from "@/components";
import { COLORS } from "@/constants";

import { styles } from "./styles";
import { SEARCH_PAGE_STRINGS } from "./strings";
import { useSearchLocation } from "./hooks";
import { useCallback } from "react";

export const SearchPage = () => {
  const { searchText, handleSearch, searchResult, isLoading, isError, error } =
    useSearchLocation();

  const renderSearchResults = useCallback(() => {
    if (!searchResult) {
      return null;
    }

    return <Text>{searchResult.locationsReports.length}</Text>;
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

    return <View style={styles.container}>{renderSearchResults()}</View>;
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
