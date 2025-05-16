import { COLORS, FONT_SIZES } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderRadius: 4,
    borderColor: COLORS.primary,
    borderWidth: 1,
    marginBottom: 34,
  },
  todayLabel: {
    fontSize: FONT_SIZES.normal,
    fontWeight: "600",
    color: COLORS.primary,
    marginBottom: 8,
  },
  generalSeverity: {
    fontSize: FONT_SIZES.intermediate,
    fontWeight: "600",
    color: COLORS.primary,
    marginBottom: 10,
  },
  pollutantsLabel: {
    fontSize: FONT_SIZES.normal,
    fontWeight: "600",
    color: COLORS.text,
    marginBottom: 10,
  },
  pollutantsContainer: {
    width: "100%",
    justifyContent: "center",
    backgroundColor: COLORS.backgroundGrey,
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 6,
    marginBottom: 14,
  },
  pollutant: {
    fontWeight: "600",
    marginBottom: 6,
  },
  recommendationsLabel: {
    fontWeight: "600",
    marginBottom: 10,
    fontSize: FONT_SIZES.normal,
    color: COLORS.text,
  },
  recommendation: {
    color: COLORS.text,
    fontSize: FONT_SIZES.normal,
    marginBottom: 8,
    marginLeft: 8,
  },
});
