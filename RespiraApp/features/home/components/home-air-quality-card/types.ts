import type { IPollutant } from "@/interfaces";

export interface HomeAirQualityCardProps {
  city: string;
  state: string;
  pollutants: IPollutant[];
  isFavorite: boolean;
  onPressFavorite: VoidFunction;
}
