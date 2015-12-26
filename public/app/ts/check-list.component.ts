/// <reference path="../../../typings/tsd.d.ts" />

import {NgForm}    from 'angular2/common';
import { Task }    from './task';
import { CheckList }    from './checkList';
import {Component, OnInit, Input}   from 'angular2/core';

@Component({
	selector: 'checklist',
	templateUrl: 'app/check-list.component.html'
})
export class CheckListComponent {
	@Input() checkList:CheckList;
	constructor() {}
	ngOnInit() {}
}