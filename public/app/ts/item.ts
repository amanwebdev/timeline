/// <reference path="../../../typings/tsd.d.ts" />

export class Item {
	constructor(
		public text:string,
		public done:boolean,
		public checkListId?:number
	) {}
}