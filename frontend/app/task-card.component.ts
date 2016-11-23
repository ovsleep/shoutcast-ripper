import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from './task';

@Component({
  moduleId: module.id,
  selector: 'taskCard',
  templateUrl: 'task-card.component.html',
  styleUrls: [ 'task-card.component.css']
})

export class TaskCardComponent implements OnInit { 
  ngOnInit(): void {
    
  }

  @Input() task: Task

  constructor(private router: Router) { }
}
