import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { COLORS } from "@/constants";

import type { EmptyListResultProps } from "./types";
import { EMPTY_LIST_RESULT_STRINGS } from "./strings";
import { styles } from "./styles";

export const EmptyListResult = ({ message }: EmptyListResultProps) => {
  return (
    <View style={styles.container}>
      <Ionicons name="sad-outline" size={80} color={COLORS.primary} />
      <Text style={styles.message}>
        {message ?? EMPTY_LIST_RESULT_STRINGS.MESSAGE}
      </Text>
    </View>
  );
};
