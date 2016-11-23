import { Component } from '@angular/core'
import { TaskService } from './task.service'
// Add the RxJS Observable operators.
import './rxjs-operators';

@Component({
    selector: 'my-app',
    moduleId: module.id,
    template: 
        `
        <div class="container rounded">
            <h1>My Radios</h1>
            <router-outlet></router-outlet>
        </div>
        
         `,
    styles: [`
    label {
    display: inline-block;
    width: 3em;
    margin: .5em 0;
    color: #607D8B;
    font-weight: bold;
    font-size:30px;
    }
    input {
    height: 2em;
    font-size: 1em;
    padding-left: .4em;
    }
    button {
    margin-top: 20px;
    font-family: Arial;
    background-color: #eee;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer; cursor: hand;
    }
    button:hover {
    background-color: #cfd8dc;
    }
    button:disabled {
    background-color: #eee;
    color: #ccc; 
    cursor: auto;
    }
`],
   // styleUrls: ['app.component.css'],
    providers: [TaskService]
})

export class AppComponent{
    title = 'Tour of Heroes';

}