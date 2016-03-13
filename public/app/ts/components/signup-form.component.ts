/// <reference path="../../../../typings/tsd.d.ts" />

import { Component } 			from 'angular2/core';
import { NgForm }    			from 'angular2/common';
import { RouteParams, Router } 	from 'angular2/router';
import { Http } 				from 'angular2/http';
import { AppComponent } 		from './app.component';
import { UserService } 			from '../services/user.service';

@Component({
	selector: 'signup-form',
	templateUrl: 'app/templates/signup-form.component.html',
})
export class SignUpFormComponent {
	private username: String;
	private password: String;

	constructor(private http: Http, private _router: Router, private _userService: UserService) { }

	onSubmit() {
		this._userService.register(this.username, this.password,
			() => this._router.navigate(['App']));
	}
	backToLogin() {
		this._router.navigate(['LogIn']);
	}
}