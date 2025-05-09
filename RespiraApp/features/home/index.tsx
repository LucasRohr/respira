import { useCallback, useState } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { styles } from "./styles";
import {
  useCurrentAirHistory,
  useCurrentAirQuality,
  useHomeUser,
} from "./hooks";

export const HomePage = () => {
  const { user, errorUser, isErrorUser, isLoadingUser } = useHomeUser();

  const { airQuality, errorQuality, isErrorQuality, isLoadingQuality } =
    useCurrentAirQuality();

  const { airHistory, errorHistory, isErrorHistory, isLoadingHistory } =
    useCurrentAirHistory(airQuality?.location.id ?? 0);

  const [region, setRegion] = useState({
    latitude: -30.027542,
    longitude: -51.175467,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const renderMap = useCallback(() => {
    return (
      <MapView style={styles.map} region={region}>
        <Marker
          coordinate={{
            latitude: -30.027542,
            longitude: -51.175467,
          }}
        />
      </MapView>
    );
  }, []);

  return <View style={styles.container}>{renderMap()}</View>;
};
