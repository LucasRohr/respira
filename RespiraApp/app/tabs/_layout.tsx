import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

import { COLORS } from "@/constants";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveBackgroundColor: COLORS.primary,
        tabBarInactiveBackgroundColor: COLORS.primary,
        tabBarActiveTintColor: COLORS.secondary,
        tabBarInactiveTintColor: COLORS.primaryOff,
        tabBarStyle: {
          paddingTop: 10,
          backgroundColor: COLORS.primary,
        },
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search/index"
        options={{
          title: "Pesquisar",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favoritos",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "star" : "star-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Seu Perfil",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
