import { StyleSheet } from "react-native";

import { COLORS, FONT_SIZES, SPACINGS } from "@/constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACINGS.pageHorizontal,
    width: "100%",
  },
  text: {
    color: COLORS.primary,
    fontSize: FONT_SIZES.big,
    fontWeight: "600",
    marginBottom: 18,
    marginTop: SPACINGS.pageVertical,
  },
});
