import type { ApiPollutant } from "../pollutant/api-pollutant";

export interface ApiAirQualityReport {
  id?: number;
  date?: string;
  generalSeverity?: string;
  pollutants?: ApiPollutant[];
}
