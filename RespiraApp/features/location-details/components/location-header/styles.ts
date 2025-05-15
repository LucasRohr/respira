import { COLORS, FONT_SIZES } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    fontSize: FONT_SIZES.normal,
    fontWeight: "500",
    marginBottom: 8,
  },
  locationContainer: {
    alignItems: "flex-start",
  },
  locationName: {
    fontSize: FONT_SIZES.normal,
    fontWeight: "700",
    color: COLORS.primary,
  },
  favoriteButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
