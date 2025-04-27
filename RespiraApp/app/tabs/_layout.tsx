import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home/index"
        options={{ headerShown: false, title: "Home" }}
      />
      <Tabs.Screen name="search/index" options={{ title: "Pesquisar" }} />
      <Tabs.Screen name="favorites/index" options={{ title: "Favoritos" }} />
      <Tabs.Screen name="profile/index" options={{ title: "Seu Perfil" }} />
    </Tabs>
  );
}
