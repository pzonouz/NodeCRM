import { Constants } from './../../shared/constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  AuthrizationHeader: string;
  constructor(private httpClient: HttpClient) {
    this.AuthrizationHeader = `Bearer ${localStorage.getItem('access_token')}`;
  }

  listUsers() {
    return this.httpClient.get(`${Constants.API_URL}/auth/users`, {
      headers: new HttpHeaders({ Authorization: this.AuthrizationHeader }),
    });
  }
}
