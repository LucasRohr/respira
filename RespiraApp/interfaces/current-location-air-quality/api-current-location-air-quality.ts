import type { ApiAirQualityReport } from "../air-quality-report/api-air-quality-report";
import type { ApiLocation } from "../location/api-location";

// Will get by city name sent by the app on the home page load
/*
- searchLocation(nameSentByHome)
- getLatestLocationReport()
- calculateRecommendations()
*/

export interface ApiCurrentLocationAirQuality {
  location?: ApiLocation;
  airQualityReport?: ApiAirQualityReport;
  recommendations?: string[];
}
