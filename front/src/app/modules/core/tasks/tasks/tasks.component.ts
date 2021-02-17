import { TasksCreateComponent } from './../tasks-create/tasks-create.component';
import { TasksService } from './../tasks.service';
import { Task } from './../tasks.module';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from 'src/app/modules/shared/constants';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  constructor(private tasksService: TasksService, private dialog: MatDialog) {}
  tasks: Task[] = [];
  ngOnInit(): void {
    this.tasksService.getTasks().subscribe(
      (result: Task[]) => {
        this.tasks = result;
      },
      (error) => {}
    );
  }
  onTaskCreate() {
    const dialogRef = this.dialog.open(TasksCreateComponent, {
      height: Constants.dialog_Height,
      width: '280px',
      panelClass: 'dialogBox',
    });
    dialogRef.afterClosed().subscribe(() => {
      setTimeout(() => location.reload(), 2000);
    });
  }
  onTaskMore() {}
  onTaskEdit() {}
  onTaskDelete() {}
}
