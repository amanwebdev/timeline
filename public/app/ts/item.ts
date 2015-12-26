/// <reference path="../../../typings/tsd.d.ts" />

export class Item {
	constructor(
		public checkListId:number,
		public text:string,
		public done:boolean
	) {}
}