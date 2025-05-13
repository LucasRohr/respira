import { useEffect, useState } from "react";
import * as Location from "expo-location";

export const useCurrentLocation = () => {
  const [location, setLocation] =
    useState<Location.LocationGeocodedAddress | null>(null);

  useEffect(() => {
    async function getCurrentLocation() {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        return;
      }

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});

      const currentLocation = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      setLocation(currentLocation[0]);
    }

    getCurrentLocation();
  }, []);

  return { location };
};
