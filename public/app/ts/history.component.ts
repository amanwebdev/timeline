/// <reference path="../../../typings/tsd.d.ts" />

import {Component,OnInit}   from 'angular2/core';
import {Router}      from 'angular2/router';
import {ProgressGraphComponent} from './progress-graph.component';

@Component({
	selector: 'history',
	templateUrl: 'app/templates/history.component.html',
	directives: [ProgressGraphComponent]
})
export class HistoryComponent {
	public graphData:any;
	public showChecklist:boolean = false;

	constructor(){
		
	}
	ngOnInit() {
		this.graphData = [
							{date:'1-May-12',close:'1'},
							{date:'30-Apr-12',close:'2'},
							{date:'27-Apr-12',close:'3'},
							{date:'26-Apr-12',close:'4'}
						];
	}
	toggleChecklist(){
		this.showChecklist = !this.showChecklist;
		console.log("Check list is shown :"+this.showChecklist);
	}
}