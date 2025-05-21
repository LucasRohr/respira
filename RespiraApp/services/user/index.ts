import type { ApiUser, IUser } from "@/interfaces";
import { userFactory } from "@/factories";

import mockData from "./mock-data.json";

// Using mocked data due to the fact that the API is not available yet
export const getUser = async (): Promise<IUser> => {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // const response = await useRequest().get<ApiUser>("/user");

    const mockUserData: ApiUser = mockData;

    const parsedResponse = userFactory(mockUserData);

    return parsedResponse;
  } catch (error) {
    throw error;
  }
};
