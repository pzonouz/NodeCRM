import { Constants } from './../../shared/constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  AuthrizationHeader: string;
  constructor(private httpClient: HttpClient) {
    this.AuthrizationHeader = `Bearer ${localStorage.getItem('access_token')}`;
  }
  getTasks() {
    return this.httpClient.get(`${Constants.API_URL}/tasks`, {
      headers: new HttpHeaders({
        Authorization: this.AuthrizationHeader,
      }),
    });
  }
  createTask() {
    return this.httpClient.get(`${Constants.API_URL}/tasks/create`, {
      headers: new HttpHeaders({
        Authorization: this.AuthrizationHeader,
      }),
    });
  }
}
