/// <reference path="../../../typings/tsd.d.ts" />
import { Item }    from './item';

export class CheckList {
	constructor( public id: number, public name:string, public task_id: number ) {}
}