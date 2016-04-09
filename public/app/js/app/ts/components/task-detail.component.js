/// <reference path="../../../../typings/tsd.d.ts" />
System.register(['angular2/core', './progress-graph.component', '../models/task', '../common/dateformat-pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, progress_graph_component_1, task_1, dateformat_pipe_1;
    var TaskDetail;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (progress_graph_component_1_1) {
                progress_graph_component_1 = progress_graph_component_1_1;
            },
            function (task_1_1) {
                task_1 = task_1_1;
            },
            function (dateformat_pipe_1_1) {
                dateformat_pipe_1 = dateformat_pipe_1_1;
            }],
        execute: function() {
            TaskDetail = (function () {
                function TaskDetail() {
                    this.showChecklist = false;
                    this.checkListBtnClass = "fa fa-chevron-down";
                }
                TaskDetail.prototype.ngOnInit = function () {
                    this.graphData = [
                        { date: '1-May-12', close: '1' },
                        { date: '30-Apr-12', close: '2' },
                        { date: '27-Apr-12', close: '3' },
                        { date: '26-Apr-12', close: '4' }
                    ];
                };
                TaskDetail.prototype.toggleChecklist = function () {
                    this.showChecklist = !this.showChecklist;
                    this.checkListBtnClass = this.showChecklist ? "fa fa-chevron-up" : "fa fa-chevron-down";
                };
                Object.defineProperty(TaskDetail.prototype, "createdAt", {
                    get: function () {
                        var dt = new Date(this.wip.created_at.toString());
                        return dt;
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', task_1.Task)
                ], TaskDetail.prototype, "wip", void 0);
                TaskDetail = __decorate([
                    core_1.Component({
                        selector: 'task-detail',
                        templateUrl: 'app/templates/task-detail.component.html',
                        directives: [progress_graph_component_1.ProgressGraphComponent],
                        pipes: [dateformat_pipe_1.DateFormatPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TaskDetail);
                return TaskDetail;
            }());
            exports_1("TaskDetail", TaskDetail);
        }
    }
});
//# sourceMappingURL=task-detail.component.js.map