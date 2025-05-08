import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { styles } from "./styles";
import { useCallback, useState } from "react";

export const HomePage = () => {
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
