import { SharedModule } from './../../shared/shared.module';
import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { TasksCreateComponent } from './tasks-create/tasks-create.component';

export class Task {
  name: string;
}

@NgModule({
  imports: [CommonModule, TasksRoutingModule, MaterialModule, SharedModule],
  declarations: [TasksCreateComponent, TasksComponent],

})
export class TasksModule { }
