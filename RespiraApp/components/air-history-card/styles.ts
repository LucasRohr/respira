import { COLORS, FONT_SIZES } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.primaryLight,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: "95%",
    marginHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  date: {
    color: COLORS.text,
    fontSize: FONT_SIZES.normal,
    fontWeight: "bold",
    marginBottom: 8,
  },
  generalSeverity: {
    fontSize: FONT_SIZES.big,
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
  },
});
