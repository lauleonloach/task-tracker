import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {taskList} from './model/taskList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'task-tracker';
  tasks = taskList;

  taskForm = new FormGroup({
    name: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    assigned: new FormControl('', Validators.required)
  });
  

  constructor() {}

  ngOnInit() {
    
  }

  addTask = function() {
    this.tasks.unshift(this.taskForm.value);
  }
}
