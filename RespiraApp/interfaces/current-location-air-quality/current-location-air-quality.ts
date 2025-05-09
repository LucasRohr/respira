import type { IAirQualityReport } from "../air-quality-report/air-quality-report";
import type { ILocation } from "../location/location";

// Will get by city name sent by the app on the home page load
/*
- searchLocation(nameSentByHome)
- getLatestLocationReport()
- calculateRecommendations()
*/

export interface ICurrentLocationAirQuality {
  location: ILocation;
  airQualityReport: IAirQualityReport;
  recommendations: string[];
}
