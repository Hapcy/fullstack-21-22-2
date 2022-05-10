import { Inject, Injectable } from '@angular/core';
import { User } from './user';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';

export interface LoginResponse {
  user: User;
  access_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthStorageService {
  protected static TOKEN_KEY = 'token';
  protected static USER_KEY = 'user';

  saveUser(loginResponse: LoginResponse | null) {
    if (!loginResponse) {
      sessionStorage.removeItem(AuthStorageService.TOKEN_KEY);
      sessionStorage.removeItem(AuthStorageService.USER_KEY);
      return;
    }

    sessionStorage.setItem(
      AuthStorageService.TOKEN_KEY,
      loginResponse.access_token
    );
    sessionStorage.setItem(
      AuthStorageService.USER_KEY,
      JSON.stringify(loginResponse.user)
    );
    document.cookie = `${AuthStorageService.TOKEN_KEY}=${loginResponse.access_token}`;
    document.cookie = `${AuthStorageService.USER_KEY}=${JSON.stringify(
      loginResponse.user
    )}`;
  }

  loadUser(): LoginResponse | null {
    const token = this.readToken();
    const userJSON = this.readUser();

    if (!(token && userJSON)) {
      return null;
    }

    return {
      access_token: token,
      user: JSON.parse(userJSON),
    };
  }

  protected readUser() {
    return sessionStorage.getItem(AuthStorageService.USER_KEY);
  }

  protected readToken() {
    return sessionStorage.getItem(AuthStorageService.TOKEN_KEY);
  }
}

@Injectable()
export class ServerAuthStorageService extends AuthStorageService {
  constructor(@Inject(REQUEST) private request: Request) {
    super();
  }

  protected readUser() {
    return this.request.cookies?.[AuthStorageService.USER_KEY];
  }

  protected readToken() {
    return this.request.cookies?.[AuthStorageService.TOKEN_KEY] ?? null;
  }
}
