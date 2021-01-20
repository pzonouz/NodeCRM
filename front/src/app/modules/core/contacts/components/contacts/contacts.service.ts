import { Contact } from './../../../../shared/models/models.module';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private httpClient: HttpClient) {}

  public getContacts(): any {
    return this.httpClient.get('http://localhost:3000/contacts');
  }
  public editContact(id: number, contact: Contact) {
    return this.httpClient.post(
      `http://localhost:3000/contacts/edit/${id}`,
      contact
    );
  }
}
