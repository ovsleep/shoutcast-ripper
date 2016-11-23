import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent }      from './tasks.component';
import { TaskDetailComponent }      from './task-detail.component';
import { DashboardComponent }      from './dashboard.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'detail/:id',
    component: TaskDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
