import {
  ApiCurrentLocationAirQuality,
  ICurrentLocationAirQuality,
} from "@/interfaces";
import { locationFactory } from "../location/location.factory";
import { airQualityReportFactory } from "../air-quality-report/air-quality-report.factory";

const buildEmptyObject = (): ICurrentLocationAirQuality => ({
  location: {
    id: 0,
    name: "",
    city: "",
    state: "",
    cep: "",
    lat: 0,
    long: 0,
  },
  airQualityReport: {
    id: 0,
    date: "",
    generalSeverity: "BOA",
    pollutants: [],
  },
  recommendations: [],
  isFavorite: false,
});

export const currentLocationAirQualityFactory = (
  apiObject: ApiCurrentLocationAirQuality
): ICurrentLocationAirQuality => {
  if (!apiObject) {
    return buildEmptyObject();
  }

  const { location, airQualityReport, recommendations, isFavorite } = apiObject;

  return {
    location: locationFactory(location ?? buildEmptyObject().location),
    airQualityReport: airQualityReportFactory(
      airQualityReport ?? buildEmptyObject().airQualityReport
    ),
    recommendations: recommendations ?? [],
    isFavorite: isFavorite ?? false,
  };
};
