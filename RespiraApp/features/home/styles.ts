import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZES } from "@/constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  map: {
    width: "100%",
    height: "100%",
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
  carousel: {
    flex: 1,
    height: 160,
  },
  carouselContainer: {
    position: "absolute",
    top: 64,
    width: "95%",
    alignSelf: "flex-start",
    zIndex: 10,
  },
});
