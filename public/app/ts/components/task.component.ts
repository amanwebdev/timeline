/// <reference path="../../../../typings/tsd.d.ts" />

import { Component } 										from 'angular2/core';
import { NgForm, FormBuilder, Validators, ControlGroup }    from 'angular2/common';
import { Http } 											from 'angular2/http';
import { RouteParams, Router } 								from 'angular2/router';
import { Task } 											from '../models/task';
import { TimeEstimate } 									from '../models/time-estimate';
import { TimeEstimateComponent }							from './time-estimate.component';
import { EstimateValueAccessor } 							from '../estimate_value_accessor';
import { WipService }      									from  '../services/wip.service';

@Component({
	selector: 'track-panel',
	templateUrl: 'app/templates/task.component.html',
	directives: [TimeEstimateComponent, EstimateValueAccessor]
})
export class TaskComponent {
	private model: Task;
	private taskForm: ControlGroup;
	constructor(private http: Http, private _router: Router,
		private _wipService: WipService, private _builder: FormBuilder) {

		this.model = new Task();
		this.model.status = "STARTED";
		this.model.name = "Task 1";
		this.model.comments = "Shitty Task!";
		this.model.timeEstimate = new TimeEstimate(1, 20);

		this.taskForm = _builder.group({
			status: ["", Validators.required],
			name: ["", Validators.required],
			timeEstimate: ["", Validators.required],
			comments: ["", Validators.required]
		});

	}

	onSubmit(value) {
		console.log("estimate : " + JSON.stringify(value.timeEstimate));
		this._wipService.saveWip(value, () => this._router.navigate(['WIP']));
	}

}