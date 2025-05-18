import type { ApiUser, IUser } from "@/interfaces";
import { commorbidityFactory } from "../commorbidity/commorbidity.factory";

const buildEmptyUser = (): IUser => ({
  id: 0,
  name: "",
  email: "",
  birthDate: "",
  token: "",
  fcmToken: "",
  commorbidities: [],
});

export const userFactory = (apiObject: ApiUser): IUser => {
  if (!apiObject) {
    return buildEmptyUser();
  }

  const { id, name, email, birthDate, token, fcmToken, commorbidities } =
    apiObject;

  return {
    id: id ?? 0,
    name: name ?? "",
    email: email ?? "",
    birthDate: birthDate ?? "",
    token: token ?? "",
    fcmToken: fcmToken ?? "",
    commorbidities: commorbidities?.map(commorbidityFactory) ?? [],
  };
};
