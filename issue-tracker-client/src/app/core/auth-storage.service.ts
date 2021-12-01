import { Injectable } from '@angular/core';
import { User } from './user';

export interface LoginResponse {
  user: User;
  access_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthStorageService {
  private static TOKEN_KEY = 'token';
  private static USER_KEY = 'user';

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
  }

  loadUser(): LoginResponse | null {
    const token = sessionStorage.getItem(AuthStorageService.TOKEN_KEY);
    const userJSON = sessionStorage.getItem(AuthStorageService.USER_KEY);

    if (!(token && userJSON)) {
      return null;
    }

    return {
      access_token: token,
      user: JSON.parse(userJSON),
    };
  }
}
