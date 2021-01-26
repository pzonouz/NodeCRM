import { ContactDeleteComponent } from './../contactDelete/contact-delete.component';
import { ContactsMoreComponent } from '../contactsMore/contacts-more.component';
import { ContactsEditComponent } from './../contactsEdit/contacts-edit.component';
import { Contact } from './../../../../../shared/models/models.module';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactsService } from '../contacts.service';
import { ContactsCreateComponent } from '../contactsCreate/contacts-create.component';

const dialogHeight = '580px';

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
    // {
    //   id: 1,
    //   email: 'p.zonouz@gmail.com',
    //   firstName: 'Peyman',
    //   lastName: 'Khalili',
    //   address: 'Ardabil',
    //   phoneNumber: '09148998933',
    // },
  ];
  ngOnInit(): void {
    this.contactsService.getContacts().subscribe((result: Contact[]) => {
      if (result.length !== 0) {
        this.contacts = result;
      }
    });
  }
  onContactMore(id: number) {
    const dialogRef = this.dialog.open(ContactsMoreComponent, {
      height: dialogHeight,
      width: '280px',
      data: this.contacts.find((x) => x.id === id),
      panelClass: 'dialogBox',
    });
  }
  onContactEdit(id: number) {
    const dialogRef = this.dialog.open(ContactsEditComponent, {
      height: dialogHeight,
      width: '280px',
      data: this.contacts.find((x) => x.id === id),
      panelClass: 'dialogBox',
    });
    dialogRef.afterClosed().subscribe(() => {
      setTimeout(() => location.reload(), 2000);
    });
  }
  onContactDelete(id: number) {
    const dialogRef = this.dialog.open(ContactDeleteComponent, {
      height: '140px',
      width: '280px',
      data: this.contacts.find((x) => x.id === id),
      panelClass: 'dialogBox',
    });
    dialogRef.afterClosed().subscribe(() => {
      setTimeout(() => location.reload(), 2000);
    });
  }
  onContactCreate() {
    const dialogRef = this.dialog.open(ContactsCreateComponent, {
      height: dialogHeight,
      width: '280px',
      panelClass: 'dialogBox',
    });
    dialogRef.afterClosed().subscribe(() => {
      setTimeout(() => location.reload(), 2000);
    });
  }
}
