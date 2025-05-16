import { StyleSheet } from "react-native";

import { COLORS, FONT_SIZES, PADDINGS } from "@/constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: PADDINGS.pageHorizontal,
    width: "100%",
  },
  text: {
    color: COLORS.primary,
    fontSize: FONT_SIZES.big,
    fontWeight: "600",
    marginBottom: 18,
    marginTop: PADDINGS.pageVertical,
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
  searchResultsContainer: {
    flex: 1,
    width: "100%",
    marginTop: 16,
  },
  listFooter: {
    height: 32,
  },
});
