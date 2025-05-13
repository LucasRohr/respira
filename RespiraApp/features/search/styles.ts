import { StyleSheet } from "react-native";
import { COLORS, PADDINGS } from "@/constants";

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
});
