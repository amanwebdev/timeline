/// <reference path="../../../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {Http} from 'angular2/http';
import {RouteParams, Router} from 'angular2/router';
import {Task} from './task';

@Component({
	selector: 'track-panel',
	templateUrl: 'app/task.component.html'
})
export class TaskComponent {
	statusList = ['STARTED', 'FINISHED', 'BETWEEN', 'CARRY-FORWARD'];
	status = 'STARTED';
	model = new Task(1, 'STARTED', 'Task 1', new Date(), new Date(), "Shitty task!");

	constructor(private http: Http, private _router: Router) { }

	onSubmit(value) {
		console.log("form value:" + JSON.stringify(this.model));
		this.http.post('/track', JSON.stringify(this.model)).
			subscribe(res => {
				console.log(res.text());
				this.gotoWip();
			});
	}

	gotoWip() {
		let route = ['WIP'];
		this._router.navigate(route);
	}
}