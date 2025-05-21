import type {
  ApiSearchLocationResult,
  ISearchLocationResult,
} from "@/interfaces";
import { searchLocationResultFactory } from "@/factories";

import mockData from "./mock-data.json";

// import { useRequest } from "@/hooks";

// Using mocked data due to the fact that the API is not available yet
export const getSearchLocations = async (
  search: string
): Promise<ISearchLocationResult> => {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // const response = await useRequest().get<ApiSearchLocationResult>(
    //   "/search-locations",
    //   {
    //     params: {
    //       search
    //     },
    //   }
    // );

    const mockSearchData: ApiSearchLocationResult = mockData;

    const parsedResponse = searchLocationResultFactory(mockSearchData);

    return parsedResponse;
  } catch (error) {
    throw error;
  }
};
