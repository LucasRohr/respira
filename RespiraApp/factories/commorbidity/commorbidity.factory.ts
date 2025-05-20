import { ApiCommorbidity, ICommorbidity } from "@/interfaces";

const buildEmptyObject = (): ICommorbidity => ({
  cid: "",
  name: "",
  severity: "",
});

export const commorbidityFactory = (
  apiObject: ApiCommorbidity
): ICommorbidity => {
  if (!apiObject) {
    return buildEmptyObject();
  }

  const { cid, name, severity } = apiObject;

  return {
    cid: cid ?? "",
    name: name ?? "",
    severity: severity ?? "",
  };
};
