/// <reference path="../../../typings/tsd.d.ts" />

import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';

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
		return this.http.get('/checklist/' + task_id, { headers: contentHeaders })
			.map(res => res.json());
	}
	getListItems(check_list_id:number){
		return this.http.get('/checklist/items/' + check_list_id, { headers: contentHeaders })
			.map(res => res.json());
	}
	saveCheckList(checkList: CheckList) : Observable<CheckList> {
		console.log("checkList value:" + JSON.stringify(checkList));
		return this.http.post('/checklist', JSON.stringify(checkList), { headers: contentHeaders })
			.map(res => res.json());
	}
	saveItemList(itemList: Array<Item>) : Observable<Array<Item>> {
		console.log("Saving items:" + itemList);
		return this.http.post('/checklist/items/', JSON.stringify(itemList), { headers: contentHeaders })
			.map(res => res.json());
	}
	deleteItem(item: Item) : Observable<Array<Item>> {
		console.log("Deleting item :" + item);
		return this.http.post('/checklist/items/delete', JSON.stringify(item), { headers: contentHeaders })
			.map(res => res.json());
	}
}
//metro card : 66360237
//date : 05/2014