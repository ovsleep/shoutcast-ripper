"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var task_1 = require('./task');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
        this.tasksUrl = 'http://localhost:3000/api/tasks'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    TaskService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    TaskService.prototype.extractTasksResponse = function (response) {
        var res = response.json();
        var array = [];
        res.forEach(function (t) {
            var task = Object.create(task_1.Task.prototype);
            array.push(Object.assign(task, t));
        });
        console.log(array[0].newRecordings());
        return array;
    };
    TaskService.prototype.getTasks = function () {
        return this.http.get(this.tasksUrl)
            .map(this.extractTasksResponse)
            .catch(this.handleError);
    };
    TaskService.prototype.getTask = function (id) {
        return this.getTasks()
            .map(this.extractTasksResponse)
            .map(function (tasks) { return tasks.find(function (task) { return task._id === id; }); });
    };
    TaskService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map