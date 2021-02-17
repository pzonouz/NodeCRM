import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidationErrorsComponent } from './form-validation-errors/form-validation-errors.component';

@NgModule({
  declarations: [FormValidationErrorsComponent],
  imports: [CommonModule, MaterialModule],
  exports: [FormValidationErrorsComponent],
})
export class SharedModule { }
