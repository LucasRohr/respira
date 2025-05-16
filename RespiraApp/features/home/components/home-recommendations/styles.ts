import { COLORS, FONT_SIZES } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 16,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.primaryLight,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: "90%",
    marginHorizontal: 16,
  },
  airStatusTitle: {
    fontSize: FONT_SIZES.normal,
    fontWeight: "600",
    marginBottom: 8,
  },
  recommendationTitle: {
    color: COLORS.primary,
    fontSize: FONT_SIZES.normal,
    fontWeight: "600",
    marginBottom: 8,
  },
  recommendation: {
    color: COLORS.text,
    fontSize: FONT_SIZES.normal,
    marginBottom: 8,
    marginLeft: 8,
  },
});
