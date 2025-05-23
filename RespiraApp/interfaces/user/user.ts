import type { ICommorbidity } from "../commorbidity/commorbidity";

export interface IUser {
  id: number;
  name: string;
  email: string;
  birthDate: string;
  token: string;
  fcmToken?: string;
  commorbidities: ICommorbidity[];
}
