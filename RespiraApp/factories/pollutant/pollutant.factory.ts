import type { ApiPollutant, IPollutant } from "@/interfaces";

const buildEmptyObject = (): IPollutant => ({
  id: 0,
  name: "",
  concentration: "",
  severity: "BAIXO",
});

export const pollutantFactory = (apiObject: ApiPollutant): IPollutant => {
  if (!apiObject) {
    return buildEmptyObject();
  }

  const { id, name, concentration, severity } = apiObject;

  return {
    id: id ?? 0,
    name: name ?? "",
    concentration: concentration ?? "",
    severity: (severity as "BAIXO" | "MEDIO" | "ALTO") ?? "",
  };
};
