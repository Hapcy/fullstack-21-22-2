import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  get user() {
    return this._user;
  }

  private _user?: User;

  constructor() {}

  setUser(user: User) {
    this._user = user;
  }
}
