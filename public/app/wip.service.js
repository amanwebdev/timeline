/// <reference path="../../../typings/tsd.d.ts" />
System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', './task', './checkList', './ongoing'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, task_1, checkList_1, ongoing_1;
    var WipService, WIP_LIST, wipListPromise;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (task_1_1) {
                task_1 = task_1_1;
            },
            function (checkList_1_1) {
                checkList_1 = checkList_1_1;
            },
            function (ongoing_1_1) {
                ongoing_1 = ongoing_1_1;
            }],
        execute: function() {
            WipService = (function () {
                function WipService(http) {
                    this.http = http;
                }
                WipService.prototype.getWipList = function () {
                    return this.http.get('/track/taskList')
                        .map(function (res) { return res.json(); })
                        .map(function (tasks) {
                        var result = [];
                        if (tasks) {
                            tasks.forEach(function (t) { return result.push(new ongoing_1.Ongoing(new task_1.Task(t.id, t.status, t.name, new Date(), new Date(), t.comments, t.checkList))); });
                        }
                        return result;
                    });
                };
                WipService.prototype.getCheckList = function (taskId) {
                    return this.http.get('/checklist/' + taskId)
                        .map(function (res) { return res.json(); })
                        .map(function (c) { return new checkList_1.CheckList(c.id, taskId, c.name, c.itemList); });
                };
                WipService.prototype.getWip = function (id) {
                    return 0;
                };
                WipService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], WipService);
                return WipService;
            })();
            exports_1("WipService", WipService);
            WIP_LIST = [
                new task_1.Task(1, 'STARTED', 'Task 1', new Date(), new Date(), "Shitty task 1!"),
                new task_1.Task(2, 'STARTED', 'Task 2', new Date(), new Date(), "Shitty task 2!"),
                new task_1.Task(3, 'STARTED', 'Task 3', new Date(), new Date(), "Shitty task 3!"),
                new task_1.Task(4, 'STARTED', 'Task 4', new Date(), new Date(), "Shitty task 4!"),
                new task_1.Task(5, 'STARTED', 'Task 5', new Date(), new Date(), "Shitty task 5!"),
                new task_1.Task(6, 'STARTED', 'Task 6', new Date(), new Date(), "Shitty task 6!"),
            ];
            wipListPromise = Promise.resolve(this.taskList);
        }
    }
});
//# sourceMappingURL=wip.service.js.map