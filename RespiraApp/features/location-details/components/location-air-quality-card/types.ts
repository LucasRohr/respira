import type { IAirQualityReport } from "@/interfaces";

export interface LocationAirQualityCardProps {
  airQualityReport: IAirQualityReport;
  recommendations: string[];
}
