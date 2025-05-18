import type { ICommorbidity } from "../commorbidity/commorbidity";

export interface IUpdateUserProfile {
  name: string;
  email: string;
  birthDate: string;
  commorbidities: ICommorbidity[];
}
