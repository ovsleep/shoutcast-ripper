import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { TasksComponent } from './tasks.component';
import { TaskDetailComponent } from './task-detail.component';
import { DashboardComponent }      from './dashboard.component';
import { TaskCardComponent }      from './task-card.component';

//Pipes
import {DaysPipe} from './pipes/days.pipe'
import {TimestampPipe} from './pipes/timestamp.pipe'

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

import { routing } from './app.routing';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing ],
  declarations: [ 
    AppComponent,
    TasksComponent,
    TaskDetailComponent,
    DashboardComponent,
    TaskCardComponent,
    DaysPipe,
    TimestampPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
