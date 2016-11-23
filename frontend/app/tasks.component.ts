import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: 'tasks.component.html',
  styleUrls: [ 'tasks.component.css']
})

export class TasksComponent implements OnInit { 
  ngOnInit(): void {
    this.getTasks();
  }

  errorMessage: string;
  selectedTask : Task;
  tasks: Task[];
  
  constructor(
        private taskService: TaskService,
        private router: Router) { }

  onSelect(task:Task):void{
    this.selectedTask = task;
  }

  getTasks(): void {
    this.taskService.getTasks()
                      .subscribe(
                       tasks => this.tasks = tasks,
                       error =>  this.errorMessage = <any>error);
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedTask._id]);
  }
}
