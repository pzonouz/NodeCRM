import { Contact } from './../../../../shared/models/models.module';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private httpClient: HttpClient) {}

  public getContacts() {
    const contacts = this.httpClient.get('http://localhost:3000/contacts');
    // console.log(contacts);
    return contacts;
  }
  public editContact(id: number, contact: Contact) {
    return this.httpClient.put(
      `http://localhost:3000/contacts/edit/${id}`,
      contact
    );
  }
  createContact(contact: Contact) {
    return this.httpClient.post(
      `http://localhost:3000/contacts/create`,
      contact
    );
  }
}
