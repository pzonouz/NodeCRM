import { ContactsService } from './../contacts.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contacts-create',
  templateUrl: './contacts-create.component.html',
  styleUrls: ['./contacts-create.component.scss'],
})
export class ContactsCreateComponent implements OnInit {
  constructor(
    public matDialogRef: MatDialogRef<ContactsCreateComponent>,
    private concatService: ContactsService,
    private _snackBar: MatSnackBar
  ) {}
  contactCreate: FormGroup;
  ngOnInit(): void {
    this.contactCreate = new FormGroup({
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
      email: new FormControl('', [Validators.required, Validators.email]),
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
  onCloseClick($event) {
    this.matDialogRef.close();
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  onSubmit($event) {
    this.concatService.createContact(this.contactCreate.value).subscribe(
      (res) => {
        this.matDialogRef.close();
        this.openSnackBar('Successfully Created!', '');
      },
      (err) => {
        this.openSnackBar(err.error.text, '');
      },
      () => {
        console.log('completed');
      }
    );
  }
}
