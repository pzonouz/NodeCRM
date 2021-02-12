import { NavigationComponent } from './navigation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: 'contacts',
        loadChildren: () =>
          import(
            '../../core/contacts/components/contacts/contacts.module'
          ).then((m) => m.ContactsModule),
      },
      {
        path: 'tasks',
        loadChildren: () =>
          import('./../../core/tasks/tasks.module').then((m) => m.TasksModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../../core/users/users.module').then(
            (m) => m.UsersModule
          ),
      },
      {
        path: '',
        redirectTo: 'contacts',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavigationRoutingModule {}
