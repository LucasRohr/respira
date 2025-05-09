import type { ApiUser, IUser } from "@/interfaces";

const buildEmptyUser = (): IUser => ({
  id: 0,
  name: "",
  email: "",
  birthDate: "",
  token: "",
  fcmToken: "",
});

export const userFactory = (apiObject: ApiUser): IUser => {
  if (!apiObject) {
    return buildEmptyUser();
  }

  const { id, name, email, birthDate, token, fcmToken } = apiObject;

  return {
    id: id ?? 0,
    name: name ?? "",
    email: email ?? "",
    birthDate: birthDate ?? "",
    token: token ?? "",
    fcmToken: fcmToken ?? "",
  };
};
