import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "@uidotdev/usehooks";

import { QUERY_KEYS } from "@/constants";
import { getSearchLocations } from "@/services";

export const useSearchLocation = () => {
  const [search, setSearch] = useState<string>("");

  const debouncedSearchTerm = useDebounce(search, 500);

  const { data, isLoading, error, isError } = useQuery({
    queryKey: [QUERY_KEYS.SEARCH_LOCATIONS, debouncedSearchTerm],
    queryFn: () => getSearchLocations(debouncedSearchTerm),
    enabled: !!debouncedSearchTerm,
    staleTime: 1000 * 5,
  });

  const handleSearch = (text: string) => {
    setSearch(text);
  };

  return {
    searchText: search,
    handleSearch,
    searchResult: data,
    isLoading,
    isError,
    error,
  };
};
