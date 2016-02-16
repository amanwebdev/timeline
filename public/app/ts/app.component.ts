/// <reference path="../../../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {TaskComponent} from './task.component';
import {TaskListComponent} from './task-list.component';
import {HistoryComponent} from './history.component';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import {LoggedInRouterOutlet} from './LoggedInOutlet';
import {LogInFormComponent} from './login-form.component';
import {SignUpFormComponent} from './signup-form.component';

@Component({
  selector: 'time-sheet',
  templateUrl: 'app/templates/app.component.html',
  directives: [TaskComponent, TaskListComponent, DROPDOWN_DIRECTIVES, ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path:'/track', name: 'Track', component: TaskComponent,useAsDefault: true},
  { path:'/wip', name: 'WIP', component: TaskListComponent},
  { path:'/history', name: 'History', component: HistoryComponent}
])
export class AppComponent {

}