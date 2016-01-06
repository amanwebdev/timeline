/// <reference path="../../../typings/tsd.d.ts" />
import { Item }    from './item';

export class CheckList {
	public hide:boolean = true;
	constructor(
		public taskId:number,
		public name:string,
		public itemList:Array<Item>,
		public id?:number
	) {}
}