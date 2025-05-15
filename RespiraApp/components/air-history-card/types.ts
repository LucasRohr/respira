import type { ViewStyle } from "react-native";
import { AIR_QUALITY_STATUS } from "@/constants";
import type { IPollutant } from "@/interfaces";

export interface AirHistoryCardProps {
  date: string;
  generalSeverity: keyof typeof AIR_QUALITY_STATUS;
  pollutants: IPollutant[];
  customContainerStyle?: ViewStyle;
}
