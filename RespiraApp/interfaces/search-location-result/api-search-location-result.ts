import type { ApiLocationAirQuality } from "../location-air-quality/api-location-air-quality";

export interface ApiSearchLocationResult {
  locationsReports?: ApiLocationAirQuality[];
}
