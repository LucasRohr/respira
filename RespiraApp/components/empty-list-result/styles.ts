import { StyleSheet } from "react-native";

import { COLORS, FONT_SIZES } from "@/constants";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 34,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 4,
    borderColor: COLORS.primaryLight,
    borderWidth: 1,
  },
  message: {
    fontSize: FONT_SIZES.normal,
    color: COLORS.primary,
    textAlign: "center",
    marginTop: 10,
  },
});
