import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

export interface navItem {
  label: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  onLogout() {
    this.authService.logOut();
    location.reload();
  }
  ngOnInit(): void {}
  navList: navItem[] = [
    {
      label: 'Contacts',
      path: '/contacts',
      icon: 'contacts',
    },
    {
      label: 'Tasks',
      path: '/tasks',
      icon: 'tasks',
    },
    {
      label: 'Users',
      path: '/users',
      icon: 'supervisor_account',
    },
  ];
}
