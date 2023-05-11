export interface IUser {
  id: number;
  email?: string;
  username?: string;
  phone?: string;
  name?: { firstname: string; lastname: string };
}
