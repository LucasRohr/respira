import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZES, PADDINGS } from "@/constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    paddingHorizontal: PADDINGS.pageHorizontal,
    paddingVertical: PADDINGS.pageVertical,
  },
  text: {
    color: COLORS.text,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: COLORS.error,
    fontSize: FONT_SIZES.big,
    textAlign: "center",
  },
});
