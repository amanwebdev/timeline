/// <reference path="../../../../typings/tsd.d.ts" />

import { Component, OnInit, Input } 		from 'angular2/core';

import { Ongoing } 					from '../models/ongoing';
import { WipService } 				from '../services/wip.service';

import { Alert, PAGINATION_DIRECTIVES, TYPEAHEAD_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: "task-progress",
    templateUrl: 'app/templates/progress.component.html',
    directives: []
})
export class ProgressComponent {
    @Input() wip: Ongoing;
    checkListProgress: any;
    timeProgress: any;
    constructor(private _wipService: WipService) {

    }
    ngOnInit() {
      this.setCheckListProgress();
      this.setTimeProgress();
    }
    private setCheckListProgress() {
        this._wipService
            .getChecklistProgress(this.wip.taskId).
            subscribe(res => {this.checkListProgress = res.progress ? res.progress * 100 : 0;
              console.log("progress check list:"+this.checkListProgress);
            });
    }
    private setTimeProgress() {
        this._wipService
            .getTimeProgress(this.wip.taskId).
            subscribe(res => {this.timeProgress = res.progress;
              console.log("time progress:"+this.timeProgress);
            });
    }

}
