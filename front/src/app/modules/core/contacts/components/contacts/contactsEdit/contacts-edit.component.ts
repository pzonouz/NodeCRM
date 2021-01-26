import { MatSnackBar } from '@angular/material/snack-bar';
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
    private contactService: ContactsService,
    private _snackBar: MatSnackBar
  ) {}
  contactEdit: FormGroup;
  ngOnInit(): void {
    this.contactEdit = new FormGroup({
      firstName: new FormControl(this.data.firstName, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      lastName: new FormControl(this.data.lastName, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      address: new FormControl(this.data.address, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl(this.data.email, [
        Validators.required,
        Validators.email,
      ]),
      phoneNumber: new FormControl(this.data.phoneNumber, [
        Validators.required,
        Validators.pattern(/^(\+98|0)?9\d{9}$/g),
      ]),
    });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  onSubmit($event) {
    $event.preventDefault();
    this.contactService
      .editContact(this.data.id, this.contactEdit.value)
      .subscribe(
        (res) => {
          this.matDialogRef.close();
          this.openSnackBar('Successfully edited', '');
        },
        (err) => {
          this.openSnackBar(err.error.text, '');
        }
      );
  }

  onCloseClick($event) {
    $event.preventDefault();
    this.matDialogRef.close();
  }
}
