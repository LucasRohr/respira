import { ApiLocationDetails, ILocationDetails } from "@/interfaces";
import { locationDetailsFactory } from "@/factories";

import mockData from "./mock-data.json";

//import { axiosInstance } from "../axios-config";

// Using mocked data due to the fact that the API is not available yet
export const getLocationDetails = async (
  locationId: number
): Promise<ILocationDetails> => {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // const response = await axiosInstance.get<ApiLocationDetails>(
    //   "/location-details",
    //   {
    //     params: {
    //       id: locationId,
    //     },
    //   }
    // );

    const mockSearchData: ApiLocationDetails = mockData;

    const parsedResponse = locationDetailsFactory(mockSearchData);

    return parsedResponse;
  } catch (error) {
    throw error;
  }
};
