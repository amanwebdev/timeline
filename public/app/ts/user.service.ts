/// <reference path="../../../typings/tsd.d.ts" />

import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {User} from './user.ts';
import { contentHeaders } from './common/headers';

@Injectable()
export class UserService {
	constructor(private http: Http) { }

	login(user: String, pass: String, onSuccess: () => any) {
		let body = JSON.stringify({ username:user, password:pass });
		console.log("Logging in with :" + body);
		this.http.post('/user/sessions/create', body, { headers: contentHeaders }).
			subscribe(
				response => {
					localStorage.setItem('jwt', response.json().id_token);
					console.log(response.text());
					onSuccess();
				},
				error => {
					alert(error.text());
					console.log(error.text());
				}
			);
	}

	register(user: String, pass: String, onSuccess: () => any) {
		let body = JSON.stringify({ username: user, password: pass });
		console.log("Registering user with :" + body);
		this.http.post('/user/register', body, { headers: contentHeaders }).
			subscribe(
			response => {
				localStorage.setItem('jwt', response.json().id_token);
				console.log(response.text());
				onSuccess();
			},
			error => {
				alert(error.text());
				console.log(error.text());
			}
			);
	}

}