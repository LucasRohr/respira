import type { ApiLocation, ILocation } from "@/interfaces";

const buildEmptyObject = (): ILocation => ({
  id: 0,
  name: "",
  city: "",
  state: "",
  cep: "",
  lat: 0,
  long: 0,
});

export const locationFactory = (apiObject: ApiLocation): ILocation => {
  if (!apiObject) {
    return buildEmptyObject();
  }

  const { id, name, city, state, cep, lat, long } = apiObject;

  return {
    id: id ?? 0,
    name: name ?? "",
    city: city ?? "",
    state: state ?? "",
    cep: cep ?? "",
    lat: lat ?? 0,
    long: long ?? 0,
  };
};
