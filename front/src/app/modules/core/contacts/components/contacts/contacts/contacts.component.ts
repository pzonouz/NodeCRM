import { Contact } from './../../../../../shared/models/models.module';
import { ContactsEditComponent } from '../contactsEdit/contacts-edit.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactsService } from '../contacts.service';

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
  contacts: Contact[] = [];
  ngOnInit(): void {
    this.contactsService.getContacts().subscribe((result) => {
      console.log(result);
      this.contacts = result;
    });
  }
  openDialog(id: number) {
    const dialogRef = this.dialog.open(ContactsEditComponent, {
      height: '450px',
      width: '280px',
      data: this.contacts.find((x) => x.id === id),
      panelClass: 'dialogBox',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
