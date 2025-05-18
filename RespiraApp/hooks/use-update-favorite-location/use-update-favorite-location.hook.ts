import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { addFavoriteLocation, removeFavoriteLocation } from "@/services";

import type { UseUpdateFavoriteLocationParams } from "./types";

export const useUpdateFavoriteLocation = ({
  defaultIsFavorite,
}: UseUpdateFavoriteLocationParams) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(defaultIsFavorite);

  const addFavoriteMutation = useMutation({
    mutationFn: (locationIdMutation: number) =>
      addFavoriteLocation({ locationId: locationIdMutation }),
    onMutate: () => {
      setIsFavorite((prevState) => !prevState);
    },
    onError: () => {
      setIsFavorite(defaultIsFavorite);
    },
  });

  const removeFavoriteMutation = useMutation({
    mutationFn: (locationIdMutation: number) =>
      removeFavoriteLocation({ locationId: locationIdMutation }),
    onMutate: () => {
      setIsFavorite((prevState) => !prevState);
    },
    onError: () => {
      setIsFavorite(defaultIsFavorite);
    },
  });

  return {
    currentIsFavorite: isFavorite,
    addFavoriteMutation,
    removeFavoriteMutation,
  };
};
