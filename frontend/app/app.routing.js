"use strict";
var router_1 = require('@angular/router');
var tasks_component_1 = require('./tasks.component');
var task_detail_component_1 = require('./task-detail.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/tasks',
        pathMatch: 'full'
    },
    {
        path: 'tasks',
        component: tasks_component_1.TasksComponent
    },
    {
        path: 'detail/:id',
        component: task_detail_component_1.TaskDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map