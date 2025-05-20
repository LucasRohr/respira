import type { ApiUser, ILoginUser, IUser } from "@/interfaces";
import { userFactory } from "@/factories";
// import { axiosInstance } from "../axios-config";

import mockData from "./mock-data.json";

export const loginUser = async (loginBody: ILoginUser): Promise<IUser> => {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // const response = await axiosInstance.post<ApiUser>("/login", JSON.stringify(loginBody));

    const mockUserData: ApiUser = mockData;

    const parsedResponse = userFactory(mockUserData);

    return parsedResponse;
  } catch (error) {
    throw error;
  }
};
