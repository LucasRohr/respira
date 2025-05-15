import { COLORS, FONT_SIZES } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 16,
  },
  label: {
    color: COLORS.text,
    fontSize: FONT_SIZES.normal,
    marginBottom: 8,
  },
  input: {
    width: "100%",
  },
  errorMessage: {
    color: COLORS.error,
    fontSize: FONT_SIZES.normal,
    marginTop: 8,
  },
});
