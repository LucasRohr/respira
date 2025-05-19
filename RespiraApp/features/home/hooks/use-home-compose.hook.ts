import { useEffect, useMemo } from "react";
import { useCurrentAirQuality } from "./use-current-air-quality.hook";
import { useHomeUser } from "./use-home-user.hook";
import { useCurrentAirHistory } from "./user-current-air-history.hook";

const DEFAULT_MAP_REGION = Object.freeze({
  latitude: -30.027542,
  longitude: -51.175467,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
});

export const useHomeCompose = () => {
  const { errorUser, isErrorUser, isLoadingUser } = useHomeUser();

  const { airQuality, errorQuality, isErrorQuality, isLoadingQuality } =
    useCurrentAirQuality();

  const { airHistory, errorHistory, isErrorHistory, isLoadingHistory } =
    useCurrentAirHistory(airQuality?.location.id ?? 0);

  const mapRegion = useMemo(() => {
    if (airQuality?.location) {
      return {
        latitude: airQuality.location.lat,
        longitude: airQuality.location.long,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
    }

    return DEFAULT_MAP_REGION;
  }, [airQuality?.location]);

  return {
    airQuality,
    airHistory,
    mapRegion,
    isLoading: isLoadingUser || isLoadingQuality || isLoadingHistory,
    isError: isErrorUser || isErrorQuality || isErrorHistory,
    error: errorUser || errorQuality || errorHistory,
  };
};
