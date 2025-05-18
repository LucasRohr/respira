import type { IAddFavoriteLocation } from "@/interfaces";
import { STATUS_CODES } from "@/constants";

// import { axiosInstance } from "../axios-config";

export const addFavoriteLocation = async (
  addFavoriteLocationBody: IAddFavoriteLocation
): Promise<boolean> => {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // const response = await axiosInstance.post<void>(
    //   "/add-favorite-location",
    //   JSON.stringify(addFavoriteLocationBody)
    // );

    // Using mocked data due to the fact that the API is not available yet
    const response = {
      status: STATUS_CODES.SUCCESS,
    };

    return response.status === STATUS_CODES.SUCCESS;
  } catch (error) {
    throw error;
  }
};
