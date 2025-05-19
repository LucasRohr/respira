import type { ApiAirQualityReport } from "../air-quality-report/api-air-quality-report";
import type { ApiLocation } from "../location/api-location";

export interface ApiFavoriteLocation {
  location?: ApiLocation;
  airQualityReport?: ApiAirQualityReport;
}
