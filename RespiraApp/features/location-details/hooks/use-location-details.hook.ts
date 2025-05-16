import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants";
import { getLocationDetails } from "@/services";

export const useLocationDetails = (locationId: number) => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: [QUERY_KEYS.GET_LOCATION_DETAILS, locationId],
    queryFn: () => getLocationDetails(locationId),
  });

  return {
    locationDetails: data,
    isLoading,
    isError,
    error,
  };
};
