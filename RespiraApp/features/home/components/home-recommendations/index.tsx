import { useCallback, useMemo } from "react";
import { View, Text } from "react-native";

import type { HomeRecommendationsProps } from "./types";

import { styles } from "./styles";
import { HOME_RECOMMENDATIONS_STRINGS } from "./strings";
import { AIR_QUALITY_STATUS } from "@/constants";

export const HomeRecommendations = ({
  currentAirQuality,
  recommendations = [],
}: HomeRecommendationsProps) => {
  const parsedAirQuality = useMemo(() => {
    return AIR_QUALITY_STATUS[currentAirQuality ?? "BOA"];
  }, [currentAirQuality]);

  const renderRecommendations = useCallback(() => {
    if (!recommendations.length) {
      return (
        <Text>{HOME_RECOMMENDATIONS_STRINGS.WITHOUT_RECOMMENDATIONS}</Text>
      );
    }

    return recommendations.map((recommendation, index) => (
      <Text style={styles.recommendation} key={index}>
        • {recommendation}
      </Text>
    ));
  }, [recommendations]);

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.airStatusTitle, color: parsedAirQuality.COLOR }}>
        {HOME_RECOMMENDATIONS_STRINGS.AIR_QUALITY_TITLE}{" "}
        {parsedAirQuality.LABEL}
      </Text>
      <Text style={styles.recommendationTitle}>
        {HOME_RECOMMENDATIONS_STRINGS.TITLE}
      </Text>
      {renderRecommendations()}
    </View>
  );
};
