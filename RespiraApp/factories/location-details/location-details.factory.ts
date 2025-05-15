import { ApiLocationDetails, ILocationDetails } from "@/interfaces";
import { locationFactory } from "../location/location.factory";
import { airQualityReportFactory } from "../air-quality-report/air-quality-report.factory";

const buildEmptyObject = (): ILocationDetails => ({
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
  airQualityHistory: [],
  recommendations: [],
  isFavorite: false,
});

export const locationDetailsFactory = (
  apiObject: ApiLocationDetails
): ILocationDetails => {
  if (!apiObject) {
    return buildEmptyObject();
  }

  const {
    location,
    airQualityReport,
    airQualityHistory,
    recommendations,
    isFavorite,
  } = apiObject;

  return {
    location: locationFactory(location ?? buildEmptyObject().location),
    airQualityReport: airQualityReportFactory(
      airQualityReport ?? buildEmptyObject().airQualityReport
    ),
    airQualityHistory: airQualityHistory?.map(airQualityReportFactory) ?? [],
    recommendations: recommendations ?? [],
    isFavorite: isFavorite ?? false,
  };
};
