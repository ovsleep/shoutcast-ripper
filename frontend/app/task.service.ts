import { Injectable } from '@angular/core'
import { Task } from './task';
import { Headers, Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';


@Injectable()
export class TaskService{
  private tasksUrl = 'http://192.168.1.17:3000/api/tasks';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'})

  constructor(private http: Http) { }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  private extractTasksResponse(response:any)
  {
    var res = response.json() as any[];
    var array:Task[] = [];
    res.forEach(t =>{
      let task = Object.create(Task.prototype);
      array.push(Object.assign(task, t))
    });
    
    console.log(array[0].newRecordings());
    return array;
  }

  getTasks(): Observable<Task[]> {
      return this.http.get(this.tasksUrl)
               .map(this.extractTasksResponse)
               .catch(this.handleError);
  }
  getTask(id: string): Observable<Task> {
    return this.getTasks()
               .map(this.extractTasksResponse)
               .map(tasks => tasks.find(task => task._id === id));
  }

  // update(hero: Hero): Promise<Hero> {
  //   const url = `${this.heroesUrl}/${hero.id}`;
  //   return this.http
  //     .put(url, JSON.stringify(hero), {headers: this.headers})
  //     .toPromise()
  //     .then(() => hero)
  //     .catch(this.handleError);
  // }

}
