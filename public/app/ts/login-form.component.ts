/// <reference path="../../../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {RouteParams, Router} from 'angular2/router';
import {Http} from 'angular2/http';
import {AppComponent} from './app.component.ts';

@Component({
  selector: 'login-form',
  templateUrl: 'app/templates/login-form.component.html',
})
export class LogInFormComponent {
	constructor(private http: Http,private _router: Router){}
	onSubmit() {
		this._router.navigate(['App']);
	}
}