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
	constructor(private http: Http) {}

	getWipList() { 
		return this.http.get('/track/taskList')
				.map(res=>res.json())
				.map((tasks:Array<any>) => {
					let result:Array<Ongoing>=[];
					if(tasks){
						 tasks.forEach(t=>result.push(toOngoing(t)));
					}
					return result;
				});
	}
	getCheckList(taskId){
		return this.http.get('/checklist/'+taskId)
			.map(res=> res.json())
			.map(c=>new CheckList(c.id,taskId,c.name,c.itemList));
	}
  getWip(id: number | string) {
    return 0;
  }
}
function toOngoing(t:Task){
	var ongoing:Ongoing = new Ongoing(
				new Task(t.id,
					t.status,
					t.name,
					t.startTime,
					t.finishTime,
					t.comments,
					parseCheckList(t)
					));
	return ongoing;
}
function parseCheckList(task:Task){
	var checkList:CheckList;
	if(task.checkList){

	}else{
		checkList = new CheckList(task.id, "Check list...",parseListItems());
	} 
	return checkList;
}
function parseListItems(checkList?:CheckList){
	var listItems:Item[];
	if(checkList){

	}else{
		listItems = new Array<Item>();
		listItems.push(new Item("Item...",false));
	}
	return listItems;
}
var WIP_LIST = [
	new Task(1,'STARTED','Task 1', new Date(),new Date(),"Shitty task 1!"),
	new Task(2,'STARTED','Task 2', new Date(),new Date(),"Shitty task 2!"),
	new Task(3,'STARTED','Task 3', new Date(),new Date(),"Shitty task 3!"),
	new Task(4,'STARTED','Task 4', new Date(),new Date(),"Shitty task 4!"),
	new Task(5,'STARTED','Task 5', new Date(),new Date(),"Shitty task 5!"),
	new Task(6,'STARTED','Task 6', new Date(),new Date(),"Shitty task 6!"),
];

var wipListPromise = Promise.resolve(this.taskList);