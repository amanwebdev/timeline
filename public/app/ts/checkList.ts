/// <reference path="../../../typings/tsd.d.ts" />
import { Item }    from './item';

export class CheckList {
	constructor(
		public id:number,
		public taskId:number,
		public name:string,
		public itemList:Array<Item>
	) {}
}