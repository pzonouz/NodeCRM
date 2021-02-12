import { User } from './../users.module';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private userService: UsersService) {}
  users: User[] = [];
  ngOnInit(): void {
    this.userService.listUsers().subscribe(
      (result: User[]) => {
        this.users = result;
      },
      (error) => {}
    );
  }
  onUserCreate() {}
  onUserEdit(userId: number) {}
  onUserDelete(usedrId: number) {}
}
