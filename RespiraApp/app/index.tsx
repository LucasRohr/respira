import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the login page</Text>
      <Link href="/tabs/home">Go to Home screen</Link>
    </View>
  );
}
