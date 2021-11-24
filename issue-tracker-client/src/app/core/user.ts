export interface User {
  id?: number;
  name: string;
  role: UserRole;
}

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER',
}
