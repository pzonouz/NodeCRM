import { FormControl, FormGroup } from '@angular/forms';
import { Contact } from '../../../../../shared/models/models.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-contacts-more',
  templateUrl: './contacts-more.component.html',
  styleUrls: ['./contacts-more.component.scss'],
})
export class ContactsMoreComponent implements OnInit {
  constructor(
    public matDialogRef: MatDialogRef<ContactsMoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact
  ) {}

  ngOnInit(): void {}
}
