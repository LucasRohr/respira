import { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import type { HomeAirQualityCardProps } from "./types";
import { HOME_AIR_QUALITY_STRINGS } from "./strings";
import { styles } from "./styles";
import { COLORS, POLLUTANT_STATUS } from "@/constants";

export const HomeAirQualityCard = ({
  city,
  state,
  pollutants,
  isFavorite,
  onPressFavorite,
}: HomeAirQualityCardProps) => {
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

        <TouchableOpacity onPress={onPressFavorite}>
          <Ionicons
            name={isFavorite ? "star" : "star-outline"}
            color={COLORS.primary}
            size={24}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.pollutantsTitle}>
        {HOME_AIR_QUALITY_STRINGS.POLLUTANTS_TITLE}
      </Text>
      <View style={styles.pollutantsContainer}>{renderPollutants()}</View>
    </View>
  );
};
