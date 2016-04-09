/// <reference path="../../../../typings/tsd.d.ts" />
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Ongoing;
    return {
        setters:[],
        execute: function() {
            Ongoing = (function () {
                function Ongoing(task) {
                    this.task = task;
                    this.hideCheckList = true;
                    this.taskClass = "list-group-item";
                    this.checkListClass = "list-group-item hidden";
                    this.startTime = "5:00 PM";
                    this.comments = "Trivial task of fixing nothing but bunch of errors";
                    this.labels = "Project 1, Bug, Internal";
                    this.status = "To Do";
                    this.taskId = task.id;
                    this.name = task.name;
                    this.checkListProgress = 25;
                    this.timeProgress = 50;
                    this.checkList = task.checkList;
                }
                Ongoing.prototype.setCheckList = function () {
                    // this._service.getCheckList(1)
                    //           .subscribe(checkList => this.checkList = checkList);
                };
                return Ongoing;
            }());
            exports_1("Ongoing", Ongoing);
        }
    }
});
//# sourceMappingURL=ongoing.js.map