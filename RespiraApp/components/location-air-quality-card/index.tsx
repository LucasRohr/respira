import { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

import { COLORS, POLLUTANT_STATUS } from "@/constants";

import type { LocationAirQualityCardProps } from "./types";
import { styles } from "./styles";
import { LOCATION_AIR_QUALITY_CARD_STRINGS } from "./strings";
import { useUpdateFavoriteLocation } from "@/hooks";

export const LocationAirQualityCard = ({
  id,
  name,
  city,
  state,
  pollutants,
  isFavorite,
}: LocationAirQualityCardProps) => {
  const router = useRouter();

  const { currentIsFavorite, addFavoriteMutation, removeFavoriteMutation } =
    useUpdateFavoriteLocation({ defaultIsFavorite: isFavorite });

  const navigateToDetails = useCallback(() => {
    router.push({
      pathname: "/location-details/[id]",
      params: { id },
    });
  }, [id]);

  const onPressFavorite = useCallback(() => {
    if (currentIsFavorite) {
      removeFavoriteMutation.mutate(id);
    } else {
      addFavoriteMutation.mutate(id);
    }
  }, [id, currentIsFavorite, addFavoriteMutation, removeFavoriteMutation]);

  const renderPollutants = useCallback(() => {
    return pollutants.map(({ name, concentration, severity }, index) => {
      const severityParsed = POLLUTANT_STATUS[severity];

      return (
        <Text
          key={index}
          style={{ ...styles.pollutant, color: severityParsed.COLOR }}
        >
          {name} : {concentration} - {severityParsed.LABEL}
        </Text>
      );
    });
  }, [pollutants]);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={navigateToDetails}
    >
      <View style={styles.header}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.locationTitle}>{name}</Text>
          <Text style={styles.locationCityState}>
            {city}, {state}
          </Text>
        </View>

        <TouchableOpacity onPress={onPressFavorite}>
          <Ionicons
            name={currentIsFavorite ? "star" : "star-outline"}
            color={COLORS.primary}
            size={24}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.pollutantsTitle}>
        {LOCATION_AIR_QUALITY_CARD_STRINGS.POLLUTANTS_TITLE}
      </Text>
      <View style={styles.pollutantsContainer}>{renderPollutants()}</View>
    </TouchableOpacity>
  );
};
