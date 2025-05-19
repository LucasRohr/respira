import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants";
import { getFavoriteLocations } from "@/services";

export const useFavoriteLocations = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: [QUERY_KEYS.GET_FAVORITE_LOCATIONS],
    queryFn: () => getFavoriteLocations(),
  });

  return {
    locations: data,
    isLoading,
    isError,
    error,
  };
};
