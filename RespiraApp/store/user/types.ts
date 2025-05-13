import type { IUser } from "@/interfaces";

export type UserStore = {
  user?: IUser;
  setLoggedUser: (user: IUser) => void;
  removeLoggedUSer: () => void;
};
