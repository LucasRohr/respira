import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZES, SPACINGS } from "@/constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    paddingHorizontal: SPACINGS.pageHorizontal,
    paddingTop: SPACINGS.pageVertical,
    width: "100%",
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
