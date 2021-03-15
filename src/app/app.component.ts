import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {taskList} from './model/taskList';
import * as _ from "lodash";

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

  ngOnInit() {}

  addTask = function() {
    let task = this.taskForm.value;
    Object.assign(task, {id: this.tasks.length + 1});
    this.tasks.unshift(task);
  }

  removeTask = function(id) {
    const taskToRemove = _.find(this.tasks, task => task.id === id);
    const index = this.tasks.indexOf(taskToRemove);
    
    this.tasks.splice(index, 1);
  }
}
