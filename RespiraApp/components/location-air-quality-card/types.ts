import type { IPollutant } from "@/interfaces";

export interface LocationAirQualityCardProps {
  id: number;
  city: string;
  state: string;
  pollutants: IPollutant[];
  isFavorite: boolean;
}
