import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants";
import { getCurrentLocationAirHistory } from "@/services";

export const useCurrentAirHistory = (locationId: number) => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: [QUERY_KEYS.GET_CURRENT_HISTORY],
    queryFn: () => getCurrentLocationAirHistory(locationId),
  });

  return {
    airHistory: data,
    isLoadingHistory: isLoading,
    errorHistory: error,
    isErrorHistory: isError,
  };
};
