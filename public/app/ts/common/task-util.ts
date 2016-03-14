/// <reference path="../../../../typings/tsd.d.ts" />

import { WipService } 				from '../services/wip.service';

export class TaskUtil {
	constructor(private _service: WipService) {

	}
	public getProgress(wip) : number{
		
		return 0;
	}
}