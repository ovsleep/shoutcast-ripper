import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { TaskService } from './task.service';
import { Task } from './task';

@Component({
    moduleId: module.id,
    selector: 'task-detail',
    templateUrl: 'task-detail.component.html',
    styleUrls: ['task-detail.component.css']
})

export class TaskDetailComponent implements OnInit{
    @Input()
    task: Task;

    constructor(
        private taskService: TaskService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(): void{
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            this.taskService.getTask(id)
                .then(task => this.task = task);
        });
    }

    // save(): void{
    //     this.heroService.update(this.hero)
    //         .then(() => this.goBack());

    // }

    // goBack(): void {
    //     this.location.back();
    // }
}