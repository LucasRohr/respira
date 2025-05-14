import type { IAirQualityReport } from "../air-quality-report/air-quality-report";
import type { ILocation } from "../location/location";

export interface ILocationDetails {
  location: ILocation;
  airQualityReport: IAirQualityReport;
  airQualityHistory: IAirQualityReport[];
  isFavorite: boolean;
}
