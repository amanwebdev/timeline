/// <reference path="../../../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {RouteParams, Router} from 'angular2/router';
import {Http} from 'angular2/http';
import {AppComponent} from './app.component.ts';
import {UserService} from './user.service';

@Component({
	selector: 'login-form',
	templateUrl: 'app/templates/login-form.component.html',
})
export class LogInFormComponent {
	private username: String;
	private password: String;

	constructor(private http: Http, private _router: Router,private _userService: UserService) { }
	
	onSubmit() {
		this._userService.login(this.username, this.password,() => this._router.navigate(['App']));
	}
	signUp() {
		this._router.navigate(['SignUp']);
	}
}