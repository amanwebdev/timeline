/// <reference path="../../../typings/tsd.d.ts" />
System.register(['angular2/core', './task'], function(exports_1) {
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
    var core_1, task_1;
    var WipService, WIP_LIST, wipListPromise;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (task_1_1) {
                task_1 = task_1_1;
            }],
        execute: function() {
            WipService = (function () {
                function WipService() {
                }
                WipService.prototype.getWipList = function () { return wipListPromise; };
                WipService.prototype.getWip = function (id) {
                    return wipListPromise
                        .then(function (wipList) { return wipList.filter(function (task) { return task.id === +id; })[0]; });
                };
                WipService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
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
            wipListPromise = Promise.resolve(WIP_LIST);
        }
    }
});
//# sourceMappingURL=wip.service.js.map