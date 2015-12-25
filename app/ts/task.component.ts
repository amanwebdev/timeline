/// <reference path="../../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {Task} from './task';
@Component({
  selector: 'track-panel',
  templateUrl: 'app/task.component.html'
})
export class TaskComponent {
	statusList = ['STARTED', 'FINISHED', 'BETWEEN', 'CARRY-FORWARD'];
	status = 'STARTED';
	model = new Task(1,'STARTED','Task 1', new Date(),new Date(),"Shitty task!");
	submitted = false;
	onSubmit() { this.submitted = true; }
}