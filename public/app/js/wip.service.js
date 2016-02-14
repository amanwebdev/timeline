/// <reference path="../../../typings/tsd.d.ts" />
System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', './task', './item', './checkList', './ongoing'], function(exports_1) {
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
    var core_1, http_1, task_1, item_1, checkList_1, ongoing_1;
    var WipService, wipListPromise;
    function toOngoing(t) {
        var ongoing = new ongoing_1.Ongoing(new task_1.Task());
        return ongoing;
    }
    function parseCheckList(task) {
        var checkList;
        if (task.checkList) {
        }
        else {
            checkList = new checkList_1.CheckList(task.id, "Check list...", parseListItems());
        }
        return checkList;
    }
    function parseListItems(checkList) {
        var listItems;
        if (checkList) {
        }
        else {
            listItems = new Array();
            listItems.push(new item_1.Item("Item...", false));
        }
        return listItems;
    }
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
            function (item_1_1) {
                item_1 = item_1_1;
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
                            tasks.forEach(function (t) { return result.push(toOngoing(t)); });
                        }
                        return result;
                    });
                };
                WipService.prototype.saveWip = function (task, action) {
                    console.log("form value:" + JSON.stringify(task));
                    this.http.post('/track', JSON.stringify(task)).
                        subscribe(function (res) {
                        console.log(res.text());
                        action();
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
            wipListPromise = Promise.resolve(this.taskList);
        }
    }
});
//# sourceMappingURL=wip.service.js.map