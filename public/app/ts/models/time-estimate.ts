/// <reference path="../../../../typings/tsd.d.ts" />

export class TimeEstimate {
	public hours: number;
	public minutes: number;
	constructor(hours: number, minutes: number) {
		this.hours = hours; this.minutes = minutes;
	}
}