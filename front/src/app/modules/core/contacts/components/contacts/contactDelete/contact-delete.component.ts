import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from 'src/app/modules/shared/models/models.module';

@Component({
  selector: 'app-contact-delete',
  templateUrl: './contact-delete.component.html',
  styleUrls: ['./contact-delete.component.scss'],
})
export class ContactDeleteComponent implements OnInit {
  constructor(
    public matDialogRef: MatDialogRef<ContactDeleteComponent>,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Contact,
    private contactService: ContactsService
  ) {}

  ngOnInit(): void {}
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  onClose() {
    this.matDialogRef.close();
  }
  onDeleteConfirm() {
    this.contactService.deleteContact(this.data.id).subscribe(
      (res) => {
        this.matDialogRef.close();
        this.openSnackBar('Successfully deleted.', '');
      },
      (err) => {
        this.openSnackBar(err, '');
      }
    );
  }
}
