import type { ApiLocationAirQuality, ILocationAirQuality } from "@/interfaces";

import { locationFactory } from "../location/location.factory";
import { airQualityReportFactory } from "../air-quality-report/air-quality-report.factory";

const buildEmptyObject = (): ILocationAirQuality => ({
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
});

export const locationAirQualityFactory = (
  apiObject: ApiLocationAirQuality
): ILocationAirQuality => {
  if (!apiObject) {
    return buildEmptyObject();
  }

  const { location, airQualityReport } = apiObject;

  return {
    location: locationFactory(location ?? buildEmptyObject().location),
    airQualityReport: airQualityReportFactory(
      airQualityReport ?? buildEmptyObject().airQualityReport
    ),
  };
};
