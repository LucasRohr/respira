import { AIR_QUALITY_STATUS } from "@/constants";
import type { ApiPollutant } from "../pollutant/api-pollutant";

export interface ApiAirQualityReport {
  id?: number;
  date?: string;
  generalSeverity?: keyof typeof AIR_QUALITY_STATUS;
  pollutants?: ApiPollutant[];
}
