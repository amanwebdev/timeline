/// <reference path="../../../typings/tsd.d.ts" />

import {Component, Input}   from 'angular2/core';
@Component({
	selector: 'time-estimate',
	templateUrl: 'app/time-estimate.component.html'
})
export class TimeEstimate {
	@Input() private hours:number;
	@Input() private minutes:number;
	constructor(){}		
}