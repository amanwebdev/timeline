/// <reference path="../../../typings/tsd.d.ts" />

import { NgForm }    from 'angular2/common';
import { Http } from 'angular2/http';
import { Task }    from './task';
import { CheckList }    from './checkList';
import { Component, OnInit, Input }   from 'angular2/core';
import { Item } from './item';
import { ArrayOps } from './common/arrayOp';

const MAX_ITEMS: number = 3;

@Component({
	selector: 'checklist',
	templateUrl: 'app/templates/check-list.component.html'
})
export class CheckListComponent {
	@Input() checkList : CheckList;
	visibleItemList : Array<Item>;
	itemPage: number = 0;
	

	constructor(private http: Http) {}

	ngOnInit() {
		this.updateVisibleList();
	}

	onSubmit(value) {
		console.log("checkList value:" + JSON.stringify(this.checkList));
		this.http.post('/checklist', JSON.stringify(this.checkList)).
			subscribe(res => {
				console.log(res.text());
			});
	}

	addNewItem() : void {
		this.checkList.itemList.unshift(new Item("Item...", false));
		this.updateVisibleList();
	}
	deleteItem(item) : void{
		ArrayOps.remove(this.checkList.itemList, item);
	}
	itemListNavNext() : any{
		//check for this!! tired right now!!
		if (this.itemPage != this.checkList.itemList.length-3) { 
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
		if(this.checkList.itemList.length>=MAX_ITEMS){
			var startIndex;
			var endIndex;
			if((this.checkList.itemList.length/MAX_ITEMS) >= (this.itemPage+1)){
				startIndex = this.itemPage * MAX_ITEMS;
				endIndex = startIndex + MAX_ITEMS;
			}else{
				startIndex = this.checkList.itemList.length - MAX_ITEMS;
				endIndex = this.checkList.itemList.length;	
			}
			console.log("Showing items b/w :" + startIndex + "," + endIndex);
			this.visibleItemList = this.checkList
				.itemList.slice(startIndex, endIndex);
		}else{
			this.visibleItemList = this.checkList.itemList;
		}
	}
}