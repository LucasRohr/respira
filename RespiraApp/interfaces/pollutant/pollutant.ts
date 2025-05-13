import { POLLUTANT_STATUS } from "@/constants";

export interface IPollutant {
  id: number;
  name: string;
  concentration: string;
  severity: keyof typeof POLLUTANT_STATUS;
}
