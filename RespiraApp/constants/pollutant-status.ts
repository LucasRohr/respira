import { COLORS } from "./colors";

export const POLLUTANT_STATUS = Object.freeze({
  BAIXO: {
    COLOR: COLORS.success,
    LABEL: "Baixo",
  },
  MEDIO: {
    COLOR: COLORS.warning,
    LABEL: "Médio",
  },
  ALTO: {
    COLOR: COLORS.error,
    LABEL: "Alto",
  },
});
