/// <reference path="../../../../typings/tsd.d.ts" />

import { Component, Input, Self, EventEmitter, Output }   	from 'angular2/core';
import { NgControl, ControlValueAccessor, NgModel } 		from 'angular2/common';
import { TimeEstimate } 									from '../models/time-estimate';

@Component({
	selector: 'time-estimate, time-estimate',
	templateUrl: 'app/templates/time-estimate.component.html',

})
export class TimeEstimateComponent {
	@Output() estimateChange: EventEmitter<any>;

	timeEstimate: TimeEstimate;

	constructor() {
		this.estimateChange = new EventEmitter();
	}
	public setValue(value:TimeEstimate) {
		console.log("Tryin to set time estimate :" + JSON.stringify(value));
		if (value && value instanceof TimeEstimate) {
			this.timeEstimate = value;
			console.log("Setting time estimate:" + JSON.stringify(value));
		}
	}
	public incrementHours(): void {
		++this.timeEstimate.hours;
		this.emitChange();
	}
	public decrementHours(): void {
		--this.timeEstimate.hours;
		this.emitChange();
	}
	public incrementMinutes() {
		++this.timeEstimate.minutes;
		this.emitChange();
	}
	public decrementMinutes(): void {
		--this.timeEstimate.minutes;
		this.emitChange();
	}
	private emitChange(): void {
		this.estimateChange.emit(this.timeEstimate);
	}
}