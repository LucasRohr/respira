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
  text: {
    color: COLORS.primary,
    fontSize: FONT_SIZES.big,
    fontWeight: "600",
    marginBottom: 18,
    marginTop: SPACINGS.pageVertical,
  },
  textCommorbidity: {
    color: COLORS.text,
    fontSize: FONT_SIZES.big,
    fontWeight: "600",
    marginBottom: 12,
    marginTop: 10,
  },
});
