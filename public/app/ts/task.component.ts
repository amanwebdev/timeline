/// <reference path="../../../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {Http} from 'angular2/http';
import {RouteParams, Router} from 'angular2/router';
import {Task} from './task';
import {TimeEstimate} from './time-estimate.component';
import {WipService}      from  './wip.service';

@Component({
	selector: 'track-panel',
	templateUrl: 'app/templates/task.component.html',
	directives: [TimeEstimate]
})
export class TaskComponent {
	model = new Task();

	constructor(private http: Http, private _router: Router, private _wipService: WipService) { }

	onSubmit(value) {
		this._wipService.saveWip(value, () => this._router.navigate(['WIP']));
	}

}