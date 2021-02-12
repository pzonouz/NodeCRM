import { GlobalGuard } from './modules/shared/auth/guards/global.guard';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // pathMatch: 'full',
    loadChildren: () =>
      import('./modules/shared/navigation/navigation.module').then(
        (m) => m.NavigationModule
      ),
    canActivate: [GlobalGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/shared/auth/auth.module').then((m) => m.AuthModule),
  },
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
