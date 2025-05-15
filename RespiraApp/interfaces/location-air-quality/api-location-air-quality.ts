import type { ApiAirQualityReport } from "../air-quality-report/api-air-quality-report";
import type { ApiLocation } from "../location/api-location";

export interface ApiLocationAirQuality {
  location?: ApiLocation;
  airQualityReport?: ApiAirQualityReport;
  isFavorite?: boolean;
}
