import { Injectable } from '@angular/core';
import { User, UserRole } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  get user() {
    return this._user;
  }

  private _user: User | null = null;

  get isAdmin(): boolean {
    return this.user?.role === UserRole.Admin;
  }

  constructor() {}

  setUser(user: User | null) {
    this._user = user;
  }
}
