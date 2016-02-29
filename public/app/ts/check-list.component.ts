/// <reference path="../../../typings/tsd.d.ts" />

import { NgForm }    from 'angular2/common';
import { Http } from 'angular2/http';
import { Task }    from './task';
import { CheckList }    from './checkList';
import { Component, OnInit, Input }   from 'angular2/core';
import { Item } from './item';

@Component({
	selector: 'checklist',
	templateUrl: 'app/templates/check-list.component.html'
})
export class CheckListComponent {
	@Input() checkList: CheckList;
	editableClass: String = "editable";
	editFieldClass : String = "editableField";
	editDisabled: Boolean = true;
	constructor(private http: Http) {}

	ngOnInit() { }

	onSubmit(value) {
		console.log("checkList value:" + JSON.stringify(this.checkList));
		this.http.post('/checklist', JSON.stringify(this.checkList)).
			subscribe(res => {
				console.log(res.text());
			});
	}

	addNewItem() : any {
		this.checkList.itemList.push(new Item("Item...", false));
	}

	editField(editableField) : any{
		this.editDisabled = false;
		this.editableClass = "editableActive";
		editableField.focus();
	}
	cancelEdit() : any{
		this.editDisabled = true;
		this.editableClass = "editable";
	}
}