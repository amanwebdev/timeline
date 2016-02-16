/// <reference path="../../../typings/tsd.d.ts" />

import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Task} from './task';
import {Item} from './item';
import {CheckList} from './checkList';
import {Ongoing} from './ongoing';

@Injectable()
export class WipService {
	constructor(private http: Http) { }

	getWipList() {
		return this.http.get('/track/taskList')
			.map(res=> res.json())
			.map((tasks: Array<any>) => {
				let result: Array<Ongoing> = [];
				if (tasks) {
					tasks.forEach(t=> result.push(toOngoing(t)));
				}
				return result;
			});
	}
	saveWip(task,action : ()=>any){
		console.log("form value:" + JSON.stringify(task));
		this.http.post('/track', this.processBeforeSave(task)).
			subscribe(res => {
				console.log(res.text());
				action();
			});
	}
	getCheckList(taskId) {
		return this.http.get('/checklist/' + taskId)
			.map(res=> res.json())
			.map(c=> new CheckList(c.id, taskId, c.name, c.itemList));
	}
	getWip(id: number | string) {
		return 0;
	}
	private processBeforeSave(task:Task):string{
		task.startTime = new Date();
		return JSON.stringify(task);
	}
}
function toOngoing(t: Task) {
	var ongoing: Ongoing = new Ongoing(new Task());
	return ongoing;
}
function parseCheckList(task: Task) {
	var checkList: CheckList;
	if (task.checkList) {

	} else {
		checkList = new CheckList(task.id, "Check list...", parseListItems());
	}
	return checkList;
}
function parseListItems(checkList?: CheckList) {
	var listItems: Item[];
	if (checkList) {

	} else {
		listItems = new Array<Item>();
		listItems.push(new Item("Item...", false));
	}
	return listItems;
}

var wipListPromise = Promise.resolve(this.taskList);