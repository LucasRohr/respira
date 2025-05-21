import type { AxiosRequestConfig } from "axios";

import { axiosInstance } from "@/services";
import { useUserStore } from "@/store";

const addJWTHeader = (
  userToken: string,
  currentConfig?: AxiosRequestConfig<any>
): AxiosRequestConfig<any> => {
  const newConfig: AxiosRequestConfig<any> = {
    ...currentConfig,
    params: {
      ...currentConfig?.params,
      Authorization: `Bearer ${userToken}`,
    },
  };

  return newConfig;
};

export const useRequest = () => {
  const loggedUser = useUserStore((store) => store.user);

  const get = async <T>(url: string, config?: AxiosRequestConfig<any>) => {
    try {
      const parsedConfig = addJWTHeader(loggedUser?.token ?? "", config);

      const response = await axiosInstance.get<T>(url, parsedConfig);

      return response;
    } catch (error) {
      throw error;
    }
  };

  const put = async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig<any>
  ) => {
    try {
      const parsedConfig = addJWTHeader(loggedUser?.token ?? "", config);

      const response = await axiosInstance.put<T>(url, data, parsedConfig);

      return response;
    } catch (error) {
      throw error;
    }
  };

  const post = async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig<any>
  ) => {
    try {
      const parsedConfig = addJWTHeader(loggedUser?.token ?? "", config);

      const response = await axiosInstance.post<T>(url, data, parsedConfig);

      return response;
    } catch (error) {
      throw error;
    }
  };

  const del = async <T>(url: string, config?: AxiosRequestConfig<any>) => {
    try {
      const parsedConfig = addJWTHeader(loggedUser?.token ?? "", config);

      const response = await axiosInstance.delete<T>(url, parsedConfig);

      return response;
    } catch (error) {
      throw error;
    }
  };

  return {
    get,
    put,
    post,
    del,
  };
};
