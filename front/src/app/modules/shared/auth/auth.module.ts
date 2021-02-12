import { SharedModule } from './../shared.module';
import { ContactsModule } from './../../core/contacts/components/contacts/contacts.module';
import { FormValidationErrorsComponent } from './../form-validation-errors/form-validation-errors.component';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [LoginComponent, LogoutComponent, RegisterComponent],
  imports: [CommonModule, AuthRoutingModule, MaterialModule, SharedModule],
})
export class AuthModule {}
