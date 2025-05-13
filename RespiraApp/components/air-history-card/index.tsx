import { useCallback, useMemo } from "react";
import { Text, View } from "react-native";
import dayjs from "dayjs";

import { AIR_QUALITY_STATUS, POLLUTANT_STATUS } from "@/constants";

import type { AirHistoryCardProps } from "./types";
import { AIR_HISTORY_CARD_STRINGS } from "./strings";
import { styles } from "./styles";

export const AirHistoryCard = ({
  date,
  generalSeverity,
  pollutants,
}: AirHistoryCardProps) => {
  const memoDate = useMemo(() => {
    const dayJSDate = dayjs(date);

    return dayJSDate.format("DD/MM/YYYY");
  }, [date]);

  const renderGeneralSeverity = useCallback(() => {
    const statusParsed = AIR_QUALITY_STATUS[generalSeverity];

    return (
      <Text
        style={{
          ...styles.generalSeverity,
          color: statusParsed.COLOR,
        }}
      >
        {statusParsed.LABEL}
      </Text>
    );
  }, [generalSeverity]);

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
        <Text style={styles.date}>
          {AIR_HISTORY_CARD_STRINGS.DATE_LABEL} {memoDate}
        </Text>
        {renderGeneralSeverity()}
      </View>
      <View style={styles.pollutantsContainer}>{renderPollutants()}</View>
    </View>
  );
};
