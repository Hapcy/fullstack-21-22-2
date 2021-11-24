import { User } from "./user";

export interface Message {
  id?: number;
  text: string;
  createdAt?: Date;
  modifiedAt?: Date;
  user?: User;
}