/// <reference path="../../../typings/tsd.d.ts" />

import { NgForm } from 'angular2/common';
import { Router } from 'angular2/router';
import { Component, OnInit } from 'angular2/core';

import { Item } from './item';
import { Task }    from './task';
import { Ongoing } from './ongoing';
import { CheckList } from './checkList';
import { WipService } from './wip.service';
import { CheckListComponent } from './check-list.component';

import { PAGINATION_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
	templateUrl: 'app/templates/task-list.component.html',
	directives: [CheckListComponent, PAGINATION_DIRECTIVES]
})
export class TaskListComponent {
	public currentPageItems: Ongoing[];
	public wipList: Ongoing[];
	private totalItems: number;
	private currentPage: number = 0;
	private itemsPerPage: number = 5;

	constructor(private _router: Router, private _service: WipService) { }

	ngOnInit() {
		this._service.getWipList()
			.subscribe(wipList=> {
				this.wipList = wipList
				if (this.wipList) {
					this.totalItems = this.wipList.length;
					this.updateCurrentPageItems();
				}
			});
	}

	public toggleCheckList(wip: Ongoing): void {
		if (!wip.checkList) {
			wip.checkList
				= new CheckList(wip.taskId, "Checklist...",
					[new Item("Item...", false)]);
		}
		wip.hideCheckList = !wip.hideCheckList;
		wip.taskClass = wip.hideCheckList ? "list-group-item" : "list-group-item noBottomBorder";
		wip.checkListClass = wip.hideCheckList ? "list-group-item hidden" : "list-group-item noTopBorder";
	}

	public pageChanged(event: any): void {
		console.log('Page changed to: ' + event.page);
		console.log('Number items per page: ' + event.itemsPerPage);
		this.currentPage = event.page;
		this.updateCurrentPageItems();
	}

	private updateCurrentPageItems(): void {
		if (this.wipList) {
			this.currentPageItems = this.wipList
				.slice(this.currentPage, this.currentPage + this.itemsPerPage);

			console.log("total page items:" + this.wipList.length
				+ ", current page:" + this.currentPage + ", items per page:" + this.itemsPerPage);
		}
	}
}