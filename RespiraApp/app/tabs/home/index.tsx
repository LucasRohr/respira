import { View, Text, StyleSheet } from "react-native";

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

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the home screen</Text>
    </View>
  );
}
