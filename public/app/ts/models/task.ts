/// <reference path="../../../../typings/tsd.d.ts" />
import { CheckList }    from './checkList';
import { User }    from './user';
import { TimeEstimate } from './time-estimate.ts';

export class Task {
	public id: number;
	public status: string;
	public name: string;
	public startTime: Date;
	public finishTime: Date;
	public comments: string;
	public checkList: CheckList;
	public user: User;
	public timeEstimate: TimeEstimate;
	constructor() { 
		
	}
}