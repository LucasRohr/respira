import type {
  ApiFavoriteLocationsList,
  IFavoriteLocationsList,
} from "@/interfaces";
import { favoriteLocationsListFactory } from "@/factories";

import mockData from "./mock-data.json";

// Using mocked data due to the fact that the API is not available yet
export const getFavoriteLocations =
  async (): Promise<IFavoriteLocationsList> => {
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // const response = await useRequest().get<ApiFavoriteLocations>(
      //   "/favorite-locations"
      // );

      const mockFavoritesData: ApiFavoriteLocationsList = mockData;

      const parsedResponse = favoriteLocationsListFactory(mockFavoritesData);

      return parsedResponse;
    } catch (error) {
      throw error;
    }
  };
