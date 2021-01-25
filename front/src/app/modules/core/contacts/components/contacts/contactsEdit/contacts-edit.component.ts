import { ContactsService } from './../contacts.service';
import { Contact } from '../../../../../shared/models/models.module';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-contacts-edit',
  templateUrl: './contacts-edit.component.html',
  styleUrls: ['./contacts-edit.component.scss'],
})
export class ContactsEditComponent implements OnInit {
  constructor(
    public matDialogRef: MatDialogRef<ContactsEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact,
    private contactService: ContactsService
  ) {}
  contactEdit: FormGroup;
  ngOnInit(): void {
    this.contactEdit = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(\+98|0)?9\d{9}$/g),
      ]),
    });
  }
  onSubmit($event) {
    $event.preventDefault();
    this.contactService
      .editContact(this.data.id, this.contactEdit.value)
      .subscribe();

    this.matDialogRef.close();
  }

  onCloseClick($event) {
    $event.preventDefault();
    this.matDialogRef.close();
  }
}
