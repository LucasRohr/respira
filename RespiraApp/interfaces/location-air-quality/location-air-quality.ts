import { IAirQualityReport } from "../air-quality-report/air-quality-report";
import { ILocation } from "../location/location";

export interface ILocationAirQuality {
  location: ILocation;
  airQualityReport: IAirQualityReport;
}
