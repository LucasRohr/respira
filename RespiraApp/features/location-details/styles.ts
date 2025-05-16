import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZES, PADDINGS } from "@/constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    paddingHorizontal: PADDINGS.pageHorizontal,
    width: "100%",
  },
  contentWrapper: {
    width: "100%",
    flex: 1,
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
  listSeparator: {
    height: 16,
  },
  listFooter: {
    height: 64,
  },
  historyCard: {
    width: "100%",
    marginHorizontal: 0,
  },
  listHeaderContainer: {
    marginBottom: 16,
  },
  listHeaderTitle: {
    fontSize: FONT_SIZES.big,
    fontWeight: "500",
    color: COLORS.primary,
  },
});
