/// <reference path="../../../../typings/tsd.d.ts" />

import { Component,OnInit }   		from 'angular2/core';
import { Router }      				from 'angular2/router';
import { ProgressGraphComponent } 	from './progress-graph.component';
import { WipService } 				from '../services/wip.service';
import { Task } 					from '../models/task';
import { TaskDetail}				from './task-detail.component';

import { PAGINATION_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
	selector: 'history',
	templateUrl: 'app/templates/history.component.html',
	directives: [TaskDetail, PAGINATION_DIRECTIVES]
})
export class HistoryComponent {
	public graphData:any;
	public showChecklist:boolean = true;
	private taskListPage: number = 0;
	private itemsPerPage: number = 5;
	private totalItems: number;
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

	public pageChanged(event: any): void {
		console.log('Page changed to: ' + event.page);
		console.log('Number items per page: ' + event.itemsPerPage);
		this.taskListPage = event.page;
	}
}
