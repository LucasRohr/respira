import { View, Text, Platform } from "react-native";
import { AppleMaps, GoogleMaps } from "expo-maps";

import { styles } from "./styles";
import { useCallback } from "react";

export const HomePage = () => {
  const renderMap = useCallback(() => {
    const isIOS = Platform.OS == "ios";

    if (isIOS) {
      return (
        <AppleMaps.View
          style={{ width: "auto", height: "100%" }}
          cameraPosition={{
            coordinates: {
              latitude: 51.509865,
              longitude: -0.1275,
            },
            zoom: 1,
          }}
        />
      );
    }

    return (
      <GoogleMaps.View
        style={{ width: "auto", height: "100%" }}
        cameraPosition={{
          coordinates: {
            latitude: 51.509865,
            longitude: -0.1275,
          },
          zoom: 1,
        }}
      />
    );
  }, []);

  return <View style={styles.container}>{renderMap()}</View>;
};
