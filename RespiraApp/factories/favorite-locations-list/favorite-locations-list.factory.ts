import type {
  ApiFavoriteLocationsList,
  IFavoriteLocationsList,
} from "@/interfaces";

import { favoriteLocationFactory } from "../favorite-location/favorite-location.factory";

const buildEmptyObject = (): IFavoriteLocationsList => ({
  locations: [],
});

export const favoriteLocationsListFactory = (
  apiObject: ApiFavoriteLocationsList
): IFavoriteLocationsList => {
  if (!apiObject) {
    return buildEmptyObject();
  }

  const { locations } = apiObject;

  return {
    locations: locations?.map(favoriteLocationFactory) ?? [],
  };
};
