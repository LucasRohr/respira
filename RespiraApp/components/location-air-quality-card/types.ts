import type { IPollutant } from "@/interfaces";

export interface LocationAirQualityCardProps {
  id: number;
  name: string;
  city: string;
  state: string;
  pollutants: IPollutant[];
  isFavorite: boolean;
}
