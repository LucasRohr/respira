import { AIR_QUALITY_STATUS } from "@/constants";

export interface HomeRecommendationsProps {
  currentAirQuality?: keyof typeof AIR_QUALITY_STATUS;
  recommendations?: string[];
}
