import { Contact } from './../../../../shared/models/models.module';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const host = 'http://192.168.1.102:3000';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private httpClient: HttpClient) {}

  public getContacts() {
    const contacts = this.httpClient.get(`${host}/contacts`);
    // console.log(contacts);
    return contacts;
  }
  public editContact(id: number, contact: Contact) {
    return this.httpClient.put(`${host}/contacts/edit/${id}`, contact);
  }
  public createContact(contact: Contact) {
    return this.httpClient.post(`${host}/contacts/create`, contact);
  }
  public deleteContact(id: number) {
    return this.httpClient.delete(`${host}/contacts/delete/${id}`);
  }
}
