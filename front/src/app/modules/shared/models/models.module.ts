import { NgModule } from '@angular/core';

export class Contact {
  id: number;
  firstName: String;
  lastName: String;
  address: String;
  phoneNumber: string;
  image: String;
}

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
})
export class ModelsModule {}
