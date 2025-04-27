import { Link } from "expo-router";
import { Text, View } from "react-native";
import { styles } from "./styles";

export const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the login page</Text>
      <Link href="/tabs/home">Go to Home screen</Link>
    </View>
  );
};
