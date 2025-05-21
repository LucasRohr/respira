import type {
  ApiCurrentLocationAirQuality,
  ICurrentLocationAirQuality,
} from "@/interfaces";
import { currentLocationAirQualityFactory } from "@/factories";

import mockData from "./mock-data.json";

// Using mocked data due to the fact that the API is not available yet
export const getCurrentLocationAirQuality =
  async (): Promise<ICurrentLocationAirQuality> => {
    try {
      // const { location } = useCurrentLocation();

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // const response = await useRequest().get<ApiCurrentLocationAirQuality>(
      //   "/current-location-air-quality",
      //   {
      //     params: {
      //       name: location?.name,
      //     },
      //   }
      // );

      const mockAirQualityData: ApiCurrentLocationAirQuality = mockData;

      const parsedResponse =
        currentLocationAirQualityFactory(mockAirQualityData);

      return parsedResponse;
    } catch (error) {
      throw error;
    }
  };
