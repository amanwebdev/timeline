/// <reference path="../../../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {RouteParams, Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import {AppComponent} from './app.component';
import {LogInFormComponent} from './login-form.component';

@Component({
	selector: 'time-sheet',
	template: `<router-outlet></router-outlet>`,
	directives: [AppComponent, LogInFormComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path: '/login', name: 'LogIn', component: LogInFormComponent, useAsDefault: true },
	{ path: '/...', name: 'App', component: AppComponent},
])
export class LogInComponent {}