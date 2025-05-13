export interface IUser {
  id: number;
  name: string;
  email: string;
  birthDate: string;
  token: string;
  fcmToken?: string;
}
