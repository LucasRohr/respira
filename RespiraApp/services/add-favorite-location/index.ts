import Snackbar from "react-native-snackbar";

import type { IAddFavoriteLocation } from "@/interfaces";
import { COLORS, SPACINGS, STATUS_CODES } from "@/constants";

import { ADD_FAVORITE_LOCATION_STRINGS } from "./strings";

export const addFavoriteLocation = async (
  addFavoriteLocationBody: IAddFavoriteLocation
): Promise<boolean> => {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // const response = await useRequest().post<void>(
    //   "/add-favorite-location",
    //   JSON.stringify(addFavoriteLocationBody)
    // );

    // Using mocked data due to the fact that the API is not available yet
    const response = {
      status: STATUS_CODES.SUCCESS,
    };

    const isSuccess = response.status === STATUS_CODES.SUCCESS;

    if (isSuccess) {
      Snackbar.show({
        text: ADD_FAVORITE_LOCATION_STRINGS.SNACKBAR_MESSAGE,
        duration: Snackbar.LENGTH_SHORT,
        marginBottom: SPACINGS.snackbarMargin,
        backgroundColor: COLORS.success,
      });
    } else {
      Snackbar.show({
        text: ADD_FAVORITE_LOCATION_STRINGS.SNACKBAR_ERROR,
        duration: Snackbar.LENGTH_SHORT,
        marginBottom: SPACINGS.snackbarMargin,
        backgroundColor: COLORS.error,
      });
    }

    return isSuccess;
  } catch (error) {
    throw error;
  }
};
