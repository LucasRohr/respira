import type { ApiCommorbidity } from "../commorbidity/api-commorbidity";

export interface ApiUser {
  id?: number;
  name?: string;
  email?: string;
  birthDate?: string;
  token?: string;
  fcmToken?: string;
  commorbidities?: ApiCommorbidity[];
}
