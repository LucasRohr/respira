import type { ApiAirQualityReport } from "../air-quality-report/api-air-quality-report";

export interface ApiCurrentLocationAirHistory {
  reports?: ApiAirQualityReport[];
}
