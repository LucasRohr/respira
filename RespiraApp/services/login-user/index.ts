import Snackbar from "react-native-snackbar";

import type { ApiUser, ILoginUser, IUser } from "@/interfaces";
import { userFactory } from "@/factories";
import { COLORS, SPACINGS, STATUS_CODES } from "@/constants";

// import { axiosInstance } from "../axios-config";
import { LOGIN_USER_STRINGS } from "./strings";
import mockData from "./mock-data.json";

const buildEmptyUser = (): IUser => ({
  id: 0,
  name: "",
  email: "",
  birthDate: "",
  token: "",
  fcmToken: "",
  commorbidities: [],
});

export const loginUser = async (loginBody: ILoginUser): Promise<IUser> => {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // const response = await axiosInstance.post<ApiUser>("/login", JSON.stringify(loginBody));

    const mockUserData: ApiUser = mockData;

    // Using mocked data due to the fact that the API is not available yet
    const response = {
      status: STATUS_CODES.SUCCESS as number,
      data: mockUserData,
    };

    const isInauthorized = response.status === STATUS_CODES.UNAUTHORIZED;

    if (isInauthorized) {
      Snackbar.show({
        text: LOGIN_USER_STRINGS.SNACKBAR_ERROR,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: COLORS.error,
      });

      return buildEmptyUser();
    }

    const parsedResponse = userFactory(response.data);

    return parsedResponse;
  } catch (error) {
    throw error;
  }
};
