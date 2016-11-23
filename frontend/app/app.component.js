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
var task_service_1 = require('./task.service');
// Add the RxJS Observable operators.
require('./rxjs-operators');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            moduleId: module.id,
            template: "\n        <div class=\"container rounded\">\n            <h1>My Radios</h1>\n            <router-outlet></router-outlet>\n        </div>\n        \n         ",
            styles: ["\n    label {\n    display: inline-block;\n    width: 3em;\n    margin: .5em 0;\n    color: #607D8B;\n    font-weight: bold;\n    font-size:30px;\n    }\n    input {\n    height: 2em;\n    font-size: 1em;\n    padding-left: .4em;\n    }\n    button {\n    margin-top: 20px;\n    font-family: Arial;\n    background-color: #eee;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer; cursor: hand;\n    }\n    button:hover {\n    background-color: #cfd8dc;\n    }\n    button:disabled {\n    background-color: #eee;\n    color: #ccc; \n    cursor: auto;\n    }\n"],
            // styleUrls: ['app.component.css'],
            providers: [task_service_1.TaskService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map