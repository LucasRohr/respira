import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "@/constants";

export const getJWTHeader = (userToken: string): Record<string, string> => {
  return { Authorization: `Bearer ${userToken}` };
};

const config: AxiosRequestConfig = {
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const axiosInstance = axios.create(config); // Axios Singleton instance
