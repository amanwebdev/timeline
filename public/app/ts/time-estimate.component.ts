/// <reference path="../../../typings/tsd.d.ts" />

import {Component, Input}   from 'angular2/core';
@Component({
	selector: 'time-estimate',
	templateUrl: 'app/templates/time-estimate.component.html'
})
export class TimeEstimate {
	@Input() private hours:number;
	@Input() private minutes:number;
	constructor(){}

	public incrementHours(){
		++this.hours;
	}
	public decrementHours(){
		--this.hours;
	}
	public incrementMinutes(){
		++this.minutes;
	}
	public decrementMinutes(){
		--this.minutes;
	}
}