import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from './../users.module';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(
    private userService: UsersService,
    private _snackBar: MatSnackBar
  ) {}
  users: User[] = [];
  ngOnInit(): void {
    this.userService.listUsers().subscribe(
      (result: User[]) => {
        this.users = result;
      },
      (error) => {
        this.openSnackBar(error.error.message, 'Login as Admin');
        console.log(error.error.message);
      }
    );
  }
  onUserCreate() {}
  onUserEdit(userId: number) {}
  onUserDelete(usedrId: number) {}
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
