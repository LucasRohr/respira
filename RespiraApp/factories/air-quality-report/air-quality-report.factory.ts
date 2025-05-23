import type { ApiAirQualityReport, IAirQualityReport } from "@/interfaces";
import { pollutantFactory } from "../pollutant/pollutant.factory";

const buildEmptyObject = (): IAirQualityReport => ({
  id: 0,
  date: "",
  generalSeverity: "BOA",
  pollutants: [],
});

export const airQualityReportFactory = (
  apiObject: ApiAirQualityReport
): IAirQualityReport => {
  if (!apiObject) {
    return buildEmptyObject();
  }

  const { id, date, generalSeverity, pollutants } = apiObject;

  return {
    id: id ?? 0,
    date: date ?? "",
    generalSeverity: generalSeverity ?? "BOA",
    pollutants: pollutants?.map(pollutantFactory) ?? [],
  };
};
