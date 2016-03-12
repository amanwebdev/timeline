/// <reference path="../../../typings/tsd.d.ts" />

import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Task} from './task';
import {Item} from './item';
import {CheckList} from './checkList';
import {Ongoing} from './ongoing';
import { contentHeaders } from './common/headers';

@Injectable()
export class WipService {
	constructor(private http: Http) { }

	getWipList() {
		return this.http.get('/track/taskList')
			.map(res=> res.json())
			.map((tasks: Array<any>) => {
				let result: Array<Ongoing> = [];
				if (tasks) {
					tasks.forEach(t=> result.push(new Ongoing(t)));
				}
				return result;
			});
	}
	saveWip(task,action : ()=>any){
		console.log("stringified value:" + this.processBeforeSave(task));
		this.http.post('/track', this.processBeforeSave(task), { headers: contentHeaders }).
			subscribe(res => {
				console.log(res.text());
				action();
			});
	}
	
	getWip(id: number | string) {
		return 0;
	}
	private processBeforeSave(task:Task):string{
		task.startTime = new Date();
		return JSON.stringify(task);
	}

	getCheckList(task_id:number){
		return this.http.get('/checklist/:' + task_id, { headers: contentHeaders })
			.map(res => res.json());
	}
	getListItems(check_list_id:number){
		return this.http.get('/checklist/items/:' + check_list_id, { headers: contentHeaders })
			.map(res => res.json());
	}
}