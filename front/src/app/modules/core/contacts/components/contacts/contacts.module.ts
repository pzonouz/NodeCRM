import { ContactDeleteComponent } from './contactDelete/contact-delete.component';
import { ContactsMoreComponent } from './contactsMore/contacts-more.component';
import { SharedModule } from './../../../../shared/shared.module';
import { MaterialModule } from '../../../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsEditComponent } from './contactsEdit/contacts-edit.component';
import { ContactsCreateComponent } from './contactsCreate/contacts-create.component';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    MaterialModule,
    SharedModule,
    HttpClientModule,
  ],
  declarations: [
    ContactsCreateComponent,
    ContactsComponent,
    ContactsEditComponent,
    ContactsMoreComponent,
    ContactDeleteComponent,
  ],
})
export class ContactsModule {}
