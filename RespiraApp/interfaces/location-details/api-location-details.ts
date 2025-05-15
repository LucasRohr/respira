import type { ApiAirQualityReport } from "../air-quality-report/api-air-quality-report";
import type { ApiLocation } from "../location/api-location";

export interface ApiLocationDetails {
  location?: ApiLocation;
  airQualityReport?: ApiAirQualityReport;
  airQualityHistory?: ApiAirQualityReport[];
  recommendations?: string[];
  isFavorite?: boolean;
}
