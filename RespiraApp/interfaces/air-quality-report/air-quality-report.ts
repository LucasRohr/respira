import { AIR_QUALITY_STATUS } from "@/constants";
import type { IPollutant } from "../pollutant/pollutant";

export interface IAirQualityReport {
  id: number;
  date: string;
  generalSeverity: keyof typeof AIR_QUALITY_STATUS;
  pollutants: IPollutant[];
}
