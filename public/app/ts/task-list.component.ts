/// <reference path="../../../typings/tsd.d.ts" />

import {NgForm}    from 'angular2/common';
import { Task }    from './task';
import {Component, OnInit}   from 'angular2/core';
import {Router}              from 'angular2/router';
import {WipService}      from  './wip.service';

@Component({
  templateUrl: 'app/task-list.component.html'
})
export class TaskListComponent {
	public wipList: Task[];
	constructor(
    private _router: Router,
    private _service: WipService) { }

	
	ngOnInit() {
		this._service.getWipList().then(wipList => this.wipList = wipList)
	}
}