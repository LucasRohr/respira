import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "@/constants";

const config: AxiosRequestConfig = {
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const axiosInstance = axios.create(config); // Axios Singleton instance
