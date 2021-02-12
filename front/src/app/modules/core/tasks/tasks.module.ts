import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, TasksRoutingModule, MaterialModule],
})
export class TasksModule {}
