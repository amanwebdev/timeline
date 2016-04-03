/// <reference path="../../../../typings/tsd.d.ts" />

import { Component,OnInit }   		from 'angular2/core';
import { Router }      				from 'angular2/router';
import { ProgressGraphComponent } 	from './progress-graph.component';
import { WipService } 				from '../services/wip.service';
import { Task } 					from '../models/task';
import { TaskDetail}				from './task-detail.component';

@Component({
	selector: 'history',
	templateUrl: 'app/templates/history.component.html',
	directives: [TaskDetail]
})
export class HistoryComponent {
	public graphData:any;
	public showChecklist:boolean = true;
	private taskListPage: number = 0;
	public wipList: Array<Task>;
	public selectedWip: Task;

	constructor(private _service: WipService) {
		
	}
	ngOnInit() {
		this._service.getWipListBw(1, 2)
			.subscribe(wipList => {
				this.wipList = wipList;
				if(this.wipList[0]){
					this.selectedWip = this.wipList[0];
					console.log("selected wip:" + JSON.stringify(this.selectedWip));
				}
			});
	}
	setCurrentTask(wip : Task){
		this.selectedWip = wip;
	}
}