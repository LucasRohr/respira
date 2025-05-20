import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants";
import { getUser } from "@/services";
import { useUserStore } from "@/store";
import { useEffect } from "react";

// This hook will be moved to the login feature
export const useHomeUser = () => {
  const { data, isSuccess, isLoading, error, isError } = useQuery({
    queryKey: [QUERY_KEYS.GET_USER],
    queryFn: getUser,
  });

  const setLoggedUser = useUserStore((state) => state.setLoggedUser);

  useEffect(() => {
    if (data && isSuccess) {
      setLoggedUser(data);
    }
  }, [data, isSuccess, setLoggedUser]);

  return {
    isLoadingUser: isLoading,
    errorUser: error,
    isErrorUser: isError,
  };
};
