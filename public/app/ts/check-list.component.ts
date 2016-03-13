/// <reference path="../../../typings/tsd.d.ts" />

import { NgForm }    from 'angular2/common';
import { Http } 	from 'angular2/http';
import { Task }    from './task';
import { CheckList }    from './checkList';
import { Component, OnInit, Input }   from 'angular2/core';
import { Item } from './item';
import { ArrayOps } from './common/arrayOp';
import { contentHeaders } from './common/headers';
import { WipService } from './wip.service';

const MAX_ITEMS: number = 3;

@Component({
	selector: 'checklist',
	templateUrl: 'app/templates/check-list.component.html'
})
export class CheckListComponent {
	@Input() checkList : CheckList;
	itemList : Array<Item> = new Array<Item>();
	visibleItemList : Array<Item> = new Array<Item>();
	itemPage : number = 0;
	

	constructor(private http: Http, private _service: WipService) {}

	ngOnInit() {
		this._service.getListItems(this.checkList.task_id)
			.subscribe(items => {
				this.itemList = items;
				this.updateVisibleList();
			});
	}

	onSubmit() {
		this._service.saveCheckList(this.checkList);
		this._service.saveItemList(this.itemList);
	}

	addNewItem() : void {
		this.itemList.unshift(new Item(null,"Item...", false,this.checkList.task_id));
		this.updateVisibleList();
	}
	deleteItem(item) : void{
		ArrayOps.remove(this.itemList, item);
	}
	itemListNavNext() : any{
		if (this.itemPage != (this.itemList.length/3)-1) { 
			++this.itemPage; 
		}
		this.updateVisibleList();
	}
	itemListNavPrev() : any{
		if (this.itemPage != 0) {
			--this.itemPage;
		}
		this.updateVisibleList();
	}
	private updateVisibleList():any{
		if(this.itemList.length>=MAX_ITEMS){
			var startIndex;
			var endIndex;
			if((this.itemList.length/MAX_ITEMS) >= (this.itemPage+1)){
				startIndex = this.itemPage * MAX_ITEMS;
				endIndex = startIndex + MAX_ITEMS;
			}else{
				startIndex = this.itemList.length - MAX_ITEMS;
				endIndex = this.itemList.length;	
			}
			console.log("Showing items b/w :" + startIndex + "," + endIndex);
			this.visibleItemList = this.itemList.slice(startIndex, endIndex);
		}else{
			this.visibleItemList = this.itemList;
		}
	}
}