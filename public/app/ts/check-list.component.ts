/// <reference path="../../../typings/tsd.d.ts" />

import {NgForm}    from 'angular2/common';
import {Http} from 'angular2/http';
import { Task }    from './task';
import { CheckList }    from './checkList';
import {Component, OnInit, Input}   from 'angular2/core';

@Component({
	selector: 'checklist',
	templateUrl: 'app/check-list.component.html'
})
export class CheckListComponent {
	@Input() checkList:CheckList;
	constructor(private http: Http) {}
	ngOnInit() {}

	onSubmit(value) { 
		console.log("checkList value:"+JSON.stringify(this.checkList));
		this.http.post('/checklist', JSON.stringify(this.checkList)).
		subscribe(res => {
      		console.log(res.text());
      	});
	}
}