import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-create',
  templateUrl: './tasks-create.component.html',
  styleUrls: ['./tasks-create.component.scss'],
})
export class TasksCreateComponent implements OnInit {
  constructor() { }

  tasksCreate = new FormGroup({
    taskName: new FormControl('', [Validators.required]),
    taskDescription: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
  }
  onInput($event: Event) {
  }
}
