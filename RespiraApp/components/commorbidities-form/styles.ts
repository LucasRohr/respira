import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-start",
    marginTop: 14,
    marginBottom: 30,
  },
  commorbidityContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  dropdownsContainer: {
    flex: 1,
    flexDirection: "column",
  },
  dropdownWrapper: {
    marginBottom: 12,
  },
  dropdownMenuContent: {
    backgroundColor: COLORS.background,
    color: COLORS.primary,
  },
  removeButton: {
    width: 42,
    height: 42,
    padding: 12,
    backgroundColor: COLORS.primary,
    borderRadius: 4,
    marginLeft: 12,
  },
  addButton: {
    width: 64,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    backgroundColor: COLORS.primary,
    borderRadius: 4,
    marginTop: 14,
  },
});
