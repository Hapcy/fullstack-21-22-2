import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { UserService } from './user.service';

export interface UserAuthRequest {
  name?: string;
  userName: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  access_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  get token() {
    return this._token;
  }

  get isLoggedIn() {
    return this.token ? true : false;
  }

  private _token?: string;

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  async login(userAuthRequest: UserAuthRequest) {
    const result = await (
      this.httpClient.post(
        '/api/users/login',
        userAuthRequest
      ) as Observable<LoginResponse>
    ).toPromise();
    this._token = result.access_token;
    this.userService.setUser(result.user);
  }
}
