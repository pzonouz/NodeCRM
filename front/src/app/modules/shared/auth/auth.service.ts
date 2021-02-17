import { Router } from '@angular/router';
import { Constants } from './../constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  AuthrizationHeader: string;
  constructor(private httpClient: HttpClient) {
    this.AuthrizationHeader = `Bearer ${localStorage.getItem('access_token')}`;
  }

  login(username: string, password: string) {
    return this.httpClient.post(`${Constants.API_URL}/auth/login`, {
      username,
      password,
    });
  }
  profile() {
    console.log(this.AuthrizationHeader);
    return this.httpClient.get(`${Constants.API_URL}/auth/profile`, {
      headers: new HttpHeaders({ Authorization: this.AuthrizationHeader }),
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
