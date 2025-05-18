import Snackbar from "react-native-snackbar";

import type { IRemoveFavoriteLocation } from "@/interfaces";
import { COLORS, SPACINGS, STATUS_CODES } from "@/constants";

import { REMOVE_FAVORITE_LOCATION_STRINGS } from "./strings";

// import { axiosInstance } from "../axios-config";

export const removeFavoriteLocation = async (
  removeFavoriteLocationBody: IRemoveFavoriteLocation
): Promise<boolean> => {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // const response = await axiosInstance.put<void>(
    //   "/remove-favorite-location",
    //   JSON.stringify(removeFavoriteLocationBody)
    // );

    // Using mocked data due to the fact that the API is not available yet
    const response = {
      status: STATUS_CODES.SUCCESS,
    };

    const isSuccess = response.status === STATUS_CODES.SUCCESS;

    if (isSuccess) {
      Snackbar.show({
        text: REMOVE_FAVORITE_LOCATION_STRINGS.SNACKBAR_MESSAGE,
        duration: Snackbar.LENGTH_SHORT,
        marginBottom: SPACINGS.snackbarMargin,
        backgroundColor: COLORS.success,
      });
    }

    return isSuccess;
  } catch (error) {
    throw error;
  }
};
