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
  constructor() {}

  ngOnInit(): void {}
  navList: navItem[] = [
    {
      label: 'Contacts',
      path: '/contacts',
      icon: 'contacts',
    },
  ];
}
