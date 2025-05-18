import Snackbar from "react-native-snackbar";

import type { IUpdateUserProfile } from "@/interfaces";
import { COLORS, SPACINGS, STATUS_CODES } from "@/constants";

import { UPDATE_PROFILE_STRINGS } from "./strings";

// import { axiosInstance } from "../axios-config";

export const updateUserProfile = async (
  updateUserProfileBody: IUpdateUserProfile
): Promise<boolean> => {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // const response = await axiosInstance.put<void>(
    //   "/profile",
    //   JSON.stringify(updateUserProfileBody)
    // );

    // Using mocked data due to the fact that the API is not available yet
    const response = {
      status: STATUS_CODES.SUCCESS,
    };

    const isSuccess = response.status === STATUS_CODES.SUCCESS;

    if (isSuccess) {
      Snackbar.show({
        text: UPDATE_PROFILE_STRINGS.SNACKBAR_MESSAGE,
        duration: Snackbar.LENGTH_SHORT,
        marginBottom: SPACINGS.snackbarMargin,
        backgroundColor: COLORS.warning,
      });
    } else {
      Snackbar.show({
        text: UPDATE_PROFILE_STRINGS.SNACKBAR_ERROR,
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
