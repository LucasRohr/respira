import { COLORS } from "./colors";

export const AIR_QUALITY_STATUS = Object.freeze({
  BOA: {
    COLOR: COLORS.success,
    LABEL: "Boa",
  },
  MEDIA: {
    COLOR: COLORS.warning,
    LABEL: "Média",
  },
  RUIM: {
    COLOR: COLORS.error,
    LABEL: "Ruim",
  },
});
