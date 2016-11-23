import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'my-dashboard',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    tasks: Task[] = []; 
    constructor(
        private router: Router,
        private taskService:TaskService){}

    ngOnInit():void{
        this.taskService.getTasks().then(tasks => this.tasks = tasks);
    }

    gotoDetail(task:Task):void{
        let link = ['/detail', task._id];
        this.router.navigate(link);
    }
}
