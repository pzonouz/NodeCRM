import { Contact } from './../../../../shared/models/models.module';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const host = 'http://192.168.1.100:3000';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  AuthrizationHeader: string;
  constructor(private httpClient: HttpClient) {
    this.AuthrizationHeader = `Bearer ${localStorage.getItem('access_token')}`;
  }

  getContacts() {
    const contacts = this.httpClient.get(`${host}/contacts`, {
      headers: new HttpHeaders({
        Authorization: this.AuthrizationHeader,
      }),
    });
    return contacts;
  }
  public editContact(id: number, contact: Contact) {
    return this.httpClient.put(`${host}/contacts/edit/${id}`, contact, {
      headers: new HttpHeaders({
        Authorization: this.AuthrizationHeader,
      }),
    });
  }
  public createContact(contact: Contact) {
    return this.httpClient.post(`${host}/contacts/create`, contact, {
      headers: new HttpHeaders({
        Authorization: this.AuthrizationHeader,
      }),
    });
  }
  public deleteContact(id: number) {
    return this.httpClient.delete(`${host}/contacts/delete/${id}`, {
      headers: new HttpHeaders({
        Authorization: this.AuthrizationHeader,
      }),
    });
  }
}
