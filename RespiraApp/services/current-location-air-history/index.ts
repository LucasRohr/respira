import type {
  ApiCurrentLocationAirHistory,
  ICurrentLocationAirHistory,
} from "@/interfaces";
import { currentLocationAirHistoryFactory } from "@/factories";

import mockData from "./mock-data.json";

//import { axiosInstance } from "../axios-config";

// Using mocked data due to the fact that the API is not available yet
export const getCurrentLocationAirHistory = async (
  locationId: number
): Promise<ICurrentLocationAirHistory> => {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // const response = await axiosInstance.get<ApiCurrentLocationAirHistory>(
    //   "/current-location-air-quality",
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
