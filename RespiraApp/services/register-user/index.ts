import Snackbar from "react-native-snackbar";

import { COLORS, STATUS_CODES } from "@/constants";
import { ApiUser, IRegisterUser, IUser } from "@/interfaces";
import { userFactory } from "@/factories";

import { REGISTER_USER_STRINGS } from "./strings";

const buildEmptyUser = (): IUser => ({
  id: 0,
  name: "",
  email: "",
  birthDate: "",
  token: "",
  fcmToken: "",
  commorbidities: [],
});

export const registerUser = async (
  registerBody: IRegisterUser
): Promise<IUser> => {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // const response = await useRequest().post<ApiUser>("/register", JSON.stringify(registerBody));

    const mockUserData: ApiUser = mockData;

    // Using mocked data due to the fact that the API is not available yet
    const response = {
      status: STATUS_CODES.SUCCESS as number,
      data: mockUserData,
    };

    const isError = response.status !== STATUS_CODES.SUCCESS;

    if (isError) {
      Snackbar.show({
        text: REGISTER_USER_STRINGS.SNACKBAR_ERROR,
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
