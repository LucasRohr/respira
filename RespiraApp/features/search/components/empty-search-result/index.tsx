import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { COLORS } from "@/constants";

import { EMPTY_SEARCH_RESULT_STRINGS } from "./strings";
import { styles } from "./styles";

export const EmptySearchResult = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="sad-outline" size={80} color={COLORS.primary} />
      <Text style={styles.message}>{EMPTY_SEARCH_RESULT_STRINGS.MESSAGE}</Text>
    </View>
  );
};
