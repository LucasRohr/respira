import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { COLORS } from "@/constants";

import type { LocationHeaderProps } from "./types";
import { LOCATION_HEADER_STRINGS } from "./strings";
import { styles } from "./styles";

export const LocationHeader = ({
  name,
  city,
  state,
  isFavorite,
  onPressFavorite,
}: LocationHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Text style={styles.title}>{LOCATION_HEADER_STRINGS.TITLE}</Text>

        <Text style={styles.locationName}>
          {name}, {city} - {state}
        </Text>
      </View>
      <TouchableOpacity style={styles.favoriteButton} onPress={onPressFavorite}>
        <Ionicons
          name={isFavorite ? "star" : "star-outline"}
          color={COLORS.primary}
          size={24}
        />
      </TouchableOpacity>
    </View>
  );
};
