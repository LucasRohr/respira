import { ApiSearchLocationResult, ISearchLocationResult } from "@/interfaces";
import { locationAirQualityFactory } from "../location-air-quality/location-air-quality.factory";

const buildEmptyObject = (): ISearchLocationResult => ({
  locationsReports: [],
});

export const searchLocationResultFactory = (
  apiObject: ApiSearchLocationResult
): ISearchLocationResult => {
  if (!apiObject) {
    return buildEmptyObject();
  }

  const { locationsReports } = apiObject;

  return {
    locationsReports: locationsReports?.map(locationAirQualityFactory) ?? [],
  };
};
