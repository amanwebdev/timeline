/// <reference path="../../../typings/tsd.d.ts" />

export class Task {
	constructor(
		public id: number,
		public status: string,
		public name: string,
		public startTime: Date,
		public finishTime: Date,
		public comments: string
	) { }
}