import { Message } from "./message";
import { User } from "./user";

export interface Issue {
  id?: number;
  title: string;
  description: string;
  place: string;
  status: IssueStatus;
  createdAt?: Date;
  modifiedAt?: Date;
  messages?: Message[];
  user?: User;
}

export enum IssueStatus {
  New = 'NEW',
  Doing = 'DOING',
  Done = 'DONE',
}
