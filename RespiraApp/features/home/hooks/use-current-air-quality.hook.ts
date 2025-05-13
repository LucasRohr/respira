import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants";
import { getCurrentLocationAirQuality } from "@/services";

export const useCurrentAirQuality = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: [QUERY_KEYS.GET_CURRENT_QUALITY],
    queryFn: getCurrentLocationAirQuality,
  });

  return {
    airQuality: data,
    isLoadingQuality: isLoading,
    errorQuality: error,
    isErrorQuality: isError,
  };
};
