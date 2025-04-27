import { View, Text } from "react-native";

import { styles } from "./styles";

export const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the home screen</Text>
    </View>
  );
};
