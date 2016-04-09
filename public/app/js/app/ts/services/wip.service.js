/// <reference path="../../../../typings/tsd.d.ts" />
System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', '../models/ongoing', '../common/headers'], function(exports_1, context_1) {
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
    var core_1, http_1, ongoing_1, headers_1;
    var WipService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (ongoing_1_1) {
                ongoing_1 = ongoing_1_1;
            },
            function (headers_1_1) {
                headers_1 = headers_1_1;
            }],
        execute: function() {
            WipService = (function () {
                function WipService(http) {
                    this.http = http;
                }
                WipService.prototype.getWipList = function () {
                    return this.http.get('/track/taskList')
                        .map(function (res) { return res.json(); })
                        .map(this.taskToOngoing);
                };
                WipService.prototype.getWipListBw = function (from, to) {
                    return this.http.get('/track/taskList/' + from + '/' + to, { headers: headers_1.contentHeaders })
                        .map(function (res) { return res.json(); });
                };
                WipService.prototype.taskToOngoing = function (tasks) {
                    var result = [];
                    if (tasks) {
                        tasks.forEach(function (t) { return result.push(new ongoing_1.Ongoing(t)); });
                    }
                    return result;
                };
                WipService.prototype.saveWip = function (task, action) {
                    console.log("stringified value:" + this.processBeforeSave(task));
                    this.http.post('/track', this.processBeforeSave(task), { headers: headers_1.contentHeaders }).
                        subscribe(function (res) {
                        console.log(res.text());
                        action();
                    });
                };
                WipService.prototype.getWip = function (id) {
                    return 0;
                };
                WipService.prototype.processBeforeSave = function (task) {
                    task.startTime = new Date();
                    return JSON.stringify(task);
                };
                WipService.prototype.getCheckList = function (task_id) {
                    return this.http.get('/checklist/' + task_id, { headers: headers_1.contentHeaders })
                        .map(function (res) { return res.json(); });
                };
                WipService.prototype.getListItems = function (check_list_id) {
                    return this.http.get('/checklist/items/' + check_list_id, { headers: headers_1.contentHeaders })
                        .map(function (res) { return res.json(); });
                };
                WipService.prototype.saveCheckList = function (checkList) {
                    console.log("checkList value:" + JSON.stringify(checkList));
                    return this.http.post('/checklist', JSON.stringify(checkList), { headers: headers_1.contentHeaders })
                        .map(function (res) { return res.json(); });
                };
                WipService.prototype.saveItemList = function (itemList, listId) {
                    console.log("Saving items:" + itemList);
                    return this.http.post('/checklist/items/', JSON.stringify({ items: itemList, list_id: listId }), { headers: headers_1.contentHeaders })
                        .map(function (res) { return res.json(); });
                };
                WipService.prototype.deleteItem = function (item) {
                    console.log("Deleting item :" + item);
                    return this.http.post('/checklist/items/delete', JSON.stringify(item), { headers: headers_1.contentHeaders })
                        .map(function (res) { return res.json(); });
                };
                WipService.prototype.getChecklistProgress = function (taskId) {
                    return this.http.get('/checklist/progress/' + taskId, { headers: headers_1.contentHeaders })
                        .map(function (res) { return res.json(); });
                };
                WipService.prototype.getTimeProgress = function (taskId) {
                    return this.http.get('/checklist/time_progress/' + taskId, { headers: headers_1.contentHeaders })
                        .map(function (res) { return res.json(); });
                };
                WipService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], WipService);
                return WipService;
            }());
            exports_1("WipService", WipService);
        }
    }
});
//metro card : 66360237
//date : 05/2014
//# sourceMappingURL=wip.service.js.map