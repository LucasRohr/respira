import { useCallback } from "react";
import { Text, View } from "react-native";

import { AIR_QUALITY_STATUS, POLLUTANT_STATUS } from "@/constants";

import type { LocationAirQualityCardProps } from "./types";
import { LOCATION_AIR_QUALITY_CARD_STRINGS } from "./strings";
import { styles } from "./styles";

export const LocationDetailsAirQualityCard = ({
  airQualityReport,
  recommendations,
}: LocationAirQualityCardProps) => {
  const renderGeneralSeverity = useCallback(() => {
    const statusParsed = AIR_QUALITY_STATUS[airQualityReport.generalSeverity];

    return (
      <Text
        style={{
          ...styles.generalSeverity,
          color: statusParsed.COLOR,
        }}
      >
        {LOCATION_AIR_QUALITY_CARD_STRINGS.AIR_QUALITY_LABEL}{" "}
        {statusParsed.LABEL}
      </Text>
    );
  }, [airQualityReport.generalSeverity]);

  const renderPollutants = useCallback(() => {
    return airQualityReport.pollutants.map(
      ({ name, concentration, severity }, index) => {
        const severityParsed = POLLUTANT_STATUS[severity];

        return (
          <Text
            key={index}
            style={{ ...styles.pollutant, color: severityParsed.COLOR }}
          >
            {name} : {concentration} - {severityParsed.LABEL}
          </Text>
        );
      }
    );
  }, [airQualityReport.pollutants]);

  const renderRecommendations = useCallback(() => {
    return recommendations.map((recommendation, index) => (
      <Text key={index} style={styles.recommendation}>
        • {recommendation}
      </Text>
    ));
  }, [recommendations]);

  return (
    <View style={styles.container}>
      <Text style={styles.todayLabel}>
        {LOCATION_AIR_QUALITY_CARD_STRINGS.TODAY_LABEL}
      </Text>
      {renderGeneralSeverity()}

      <Text style={styles.pollutantsLabel}>
        {LOCATION_AIR_QUALITY_CARD_STRINGS.POLLUTANTS_QUALITY_LABEL}
      </Text>
      <View style={styles.pollutantsContainer}>{renderPollutants()}</View>

      <Text style={styles.recommendationsLabel}>
        {LOCATION_AIR_QUALITY_CARD_STRINGS.RECOMMENDATIONS_LABEL}
      </Text>
      {renderRecommendations()}
    </View>
  );
};
