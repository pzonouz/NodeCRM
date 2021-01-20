import { ContactsModule } from '../../core/contacts/components/contacts/contacts.module';
import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    MaterialModule,
    ContactsModule,
  ],
})
export class NavigationModule {}
