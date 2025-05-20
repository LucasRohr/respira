import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZES, SPACINGS } from "@/constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: SPACINGS.pageHorizontal,
    paddingVertical: SPACINGS.pageVertical,
  },
  appBrandContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 22,
  },
  appName: {
    color: COLORS.text,
    fontSize: FONT_SIZES.ultraBig,
    fontWeight: "600",
    marginRight: 24,
  },
  description: {
    color: COLORS.text,
    fontSize: FONT_SIZES.intermediate,
    fontWeight: "400",
    marginBottom: 44,
  },
  logo: {
    width: 84,
    height: 84,
  },
  formContainer: {
    width: "100%",
    marginBottom: 44,
  },
  registerLink: {
    color: COLORS.primaryLight,
    textDecorationLine: "underline",
    fontSize: FONT_SIZES.intermediate,
    fontWeight: "500",
    marginTop: 32,
  },
});
