/// <reference path="../../../../typings/tsd.d.ts" />

import { Component, OnInit, Input }   	from 'angular2/core';
import { Router }      					from 'angular2/router';
import { ProgressGraphComponent } 		from './progress-graph.component';
import { Task } 						from '../models/task';
import { DateFormatPipe }					from '../common/dateformat-pipe';

@Component({
	selector: 'task-detail',
	templateUrl: 'app/templates/task-detail.component.html',
	directives: [ProgressGraphComponent],
	pipes : [DateFormatPipe]
})
export class TaskDetail {
	@Input() wip: Task;

	public graphData: any;
	public showChecklist: boolean = false;
	public checkListBtnClass = "fa fa-chevron-down";

	constructor() {

	}
	ngOnInit() {
		this.graphData = [
			{ date: '1-May-12', close: '1' },
			{ date: '30-Apr-12', close: '2' },
			{ date: '27-Apr-12', close: '3' },
			{ date: '26-Apr-12', close: '4' }
		];
	}
	toggleChecklist() {
		this.showChecklist = !this.showChecklist;
		this.checkListBtnClass = this.showChecklist ? "fa fa-chevron-up" : "fa fa-chevron-down";
	}
	public get createdAt() {
		var dt = new Date(this.wip.created_at.toString());
		return dt;
	}
}