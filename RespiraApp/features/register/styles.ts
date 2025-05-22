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
    alignItems: "center",
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 12,
    marginTop: 20,
  },
  title: {
    color: COLORS.text,
    marginRight: 32,
    fontSize: FONT_SIZES.big,
    fontWeight: "600",
    marginBottom: 18,
    marginTop: SPACINGS.pageVertical,
  },
  description: {
    color: COLORS.text,
    fontSize: FONT_SIZES.intermediate,
    fontWeight: "500",
    marginBottom: 24,
  },
  textCommorbidity: {
    color: COLORS.text,
    fontSize: FONT_SIZES.big,
    fontWeight: "600",
    marginBottom: 12,
    marginTop: 10,
  },
  logo: {
    width: 72,
    height: 72,
  },
  loginLink: {
    color: COLORS.primaryLight,
    textDecorationLine: "underline",
    fontSize: FONT_SIZES.intermediate,
    fontWeight: "500",
    marginTop: 32,
    alignSelf: "center",
    marginBottom: 42,
  },
});
