import type { IAirQualityReport } from "../air-quality-report/air-quality-report";
import type { ILocation } from "../location/location";

export interface IFavoriteLocation {
  location: ILocation;
  airQualityReport: IAirQualityReport;
}
