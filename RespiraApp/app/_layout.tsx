import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { queryClient } from "@/constants";

export default function RootLayout() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StatusBar style="auto" />
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="tabs"
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="location-details/[id]"
            options={{
              headerTransparent: false,
              headerBackTitle: "Voltar",
              headerTitle: "Detalhes",
            }}
          />
        </Stack>
      </QueryClientProvider>
    </>
  );
}
