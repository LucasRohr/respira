import type { ICommorbidity } from "../commorbidity/commorbidity";

export interface IRegisterUser {
  name: string;
  email: string;
  birthDate: string;
  password: string;
  commorbidities: ICommorbidity[];
}
