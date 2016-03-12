/// <reference path="../../../typings/tsd.d.ts" />

export class Item {
	constructor(
		public id: number,
		public text : string,
		public done : boolean,
		public check_list_id? : number
	) {}
}