import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'contacts',
    pathMatch: 'full',
    loadChildren: () =>
      import('./modules/shared/navigation/navigation.module').then(
        (m) => m.NavigationModule
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: 'contacts' },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
