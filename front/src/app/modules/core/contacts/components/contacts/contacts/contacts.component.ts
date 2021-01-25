import { ContactsEditComponent } from './../contactsEdit/contacts-edit.component';
import { Contact } from './../../../../../shared/models/models.module';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactsService } from '../contacts.service';
import { ContactsCreateComponent } from '../contactsCreate/contacts-create.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private contactsService: ContactsService
  ) {}
  contacts: Contact[] = [
    {
      id: 1,
      firstName: 'Peyman',
      lastName: 'Khalili',
      address: 'Ardabil',
      phoneNumber: '09148998933',
    },
  ];
  ngOnInit(): void {
    console.log('oninit');
    this.contactsService.getContacts().subscribe((result: Contact[]) => {
      console.log(result);
      if (result) {
        this.contacts = result;
      }
    });
  }
  onContactEdit(id: number) {
    const dialogRef = this.dialog.open(ContactsEditComponent, {
      height: '450px',
      width: '280px',
      data: this.contacts.find((x) => x.id === id),
      panelClass: 'dialogBox',
    });
  }

  onContactCreate() {
    const dialogRef = this.dialog.open(ContactsCreateComponent, {
      height: '450px',
      width: '280px',
      panelClass: 'dialogBox',
    });
  }
}
