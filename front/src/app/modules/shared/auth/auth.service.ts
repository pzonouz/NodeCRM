import { Router } from '@angular/router';
import { Constants } from './../constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string) {
    const loginUrl = `${Constants.API_URL}/auth/login`;
    return this.httpClient.post(loginUrl, {
      username,
      password,
    });
  }

  loggedIn() {
    if (localStorage.getItem('access_token') !== null) {
      return true;
    }
    return false;
  }
  logOut() {
    localStorage.removeItem('access_token');
  }
}
