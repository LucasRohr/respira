import { useCallback } from "react";
import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { COLORS, POLLUTANT_STATUS } from "@/constants";

import type { LocationAirQualityCardProps } from "./types";
import { styles } from "./styles";
import { LOCATION_AIR_QUALITY_CARD_STRINGS } from "./strings";

export const LocationAirQualityCard = ({
  id,
  city,
  state,
  pollutants,
  isFavorite,
}: LocationAirQualityCardProps) => {
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.locationTitle}>
          {city}, {state}
        </Text>

        <Ionicons
          name={isFavorite ? "star" : "star-outline"}
          color={COLORS.primary}
          size={24}
        />
      </View>
      <Text style={styles.pollutantsTitle}>
        {LOCATION_AIR_QUALITY_CARD_STRINGS.POLLUTANTS_TITLE}
      </Text>
      <View style={styles.pollutantsContainer}>{renderPollutants()}</View>
    </View>
  );
};
