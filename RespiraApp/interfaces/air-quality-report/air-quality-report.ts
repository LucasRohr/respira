import type { IPollutant } from "../pollutant/pollutant";

export interface IAirQualityReport {
  id: number;
  date: string;
  generalSeverity: string;
  pollutants: IPollutant[];
}
