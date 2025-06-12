import { COLORS, FONT_SIZES } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.primaryLight,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  headerTitleContainer: {
    alignItems: "flex-start",
  },
  locationTitle: {
    color: COLORS.primary,
    fontSize: FONT_SIZES.big,
    marginBottom: 8,
  },
  locationCityState: {
    color: COLORS.primary,
    fontSize: FONT_SIZES.intermediate,
    marginBottom: 8,
  },
  pollutantsTitle: {
    color: COLORS.text,
    fontSize: FONT_SIZES.normal,
    fontWeight: "bold",
    marginBottom: 8,
  },
  pollutantsContainer: {
    backgroundColor: COLORS.backgroundGrey,
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingTop: 8,
  },
  pollutant: {
    fontSize: FONT_SIZES.normal,
    marginBottom: 8,
    fontWeight: "600",
  },
});
