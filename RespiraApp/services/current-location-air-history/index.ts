import type {
  ApiCurrentLocationAirHistory,
  ICurrentLocationAirHistory,
} from "@/interfaces";
import { currentLocationAirHistoryFactory } from "@/factories";

import mockData from "./mock-data.json";

// Using mocked data due to the fact that the API is not available yet
export const getCurrentLocationAirHistory = async (
  locationId: number
): Promise<ICurrentLocationAirHistory> => {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // const response = await useRequest().get<ApiCurrentLocationAirHistory>(
    //   "/current-location-air-history",
    //   {
    //     params: {
    //       id: locationId,
    //     },
    //   }
    // );

    const mockAirHistoryData: ApiCurrentLocationAirHistory = mockData;

    const parsedResponse = currentLocationAirHistoryFactory(mockAirHistoryData);

    return parsedResponse;
  } catch (error) {
    throw error;
  }
};
