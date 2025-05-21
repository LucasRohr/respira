import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZES, SPACINGS } from "@/constants";

export const styles = StyleSheet.create({
  scrollContentContainer: {
    justifyContent: "space-between",
    backgroundColor: COLORS.background,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACINGS.pageHorizontal,
    paddingBottom: 24,
    width: "100%",
  },
  pageHeader: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  logoffButton: {
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 4,
  },
  text: {
    color: COLORS.primary,
    fontSize: FONT_SIZES.big,
    fontWeight: "600",
    marginBottom: 18,
    marginTop: SPACINGS.pageVertical,
  },
  logoffText: {
    color: COLORS.primary,
    fontSize: FONT_SIZES.normal,
    fontWeight: "600",
    marginRight: 12,
  },
  textCommorbidity: {
    color: COLORS.text,
    fontSize: FONT_SIZES.big,
    fontWeight: "600",
    marginBottom: 12,
    marginTop: 10,
  },
});
