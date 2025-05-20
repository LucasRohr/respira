import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZES, SPACINGS } from "@/constants";

const baseStyles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: SPACINGS.regularButton,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: COLORS.primary,
  },
  title: {
    fontSize: FONT_SIZES.big,
    fontWeight: "500",
  },
});

export const primaryStyles = StyleSheet.create({
  container: {
    ...baseStyles.container,
    backgroundColor: COLORS.primary,
  },
  title: {
    ...baseStyles.title,
    color: COLORS.textSecondary,
  },
});

export const secondaryStyles = StyleSheet.create({
  container: {
    ...baseStyles.container,
    backgroundColor: COLORS.secondary,
  },
  title: {
    ...baseStyles.title,
    color: COLORS.primary,
  },
});
