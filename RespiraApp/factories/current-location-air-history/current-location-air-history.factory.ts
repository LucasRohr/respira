import {
  ApiCurrentLocationAirHistory,
  ICurrentLocationAirHistory,
} from "@/interfaces";
import { airQualityReportFactory } from "../air-quality-report/air-quality-report.factory";

export const currentLocationAirHistoryFactory = (
  apiObject: ApiCurrentLocationAirHistory
): ICurrentLocationAirHistory => {
  if (!apiObject) {
    return {
      reports: [],
    };
  }

  const { reports } = apiObject;

  return {
    reports: reports?.map(airQualityReportFactory) ?? [],
  };
};
