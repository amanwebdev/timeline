/// <reference path="../../../typings/tsd.d.ts" />
System.register(['angular2/core', 'angular2/http', './task'], function(exports_1) {
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
    var core_1, http_1, task_1;
    var TaskComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (task_1_1) {
                task_1 = task_1_1;
            }],
        execute: function() {
            TaskComponent = (function () {
                function TaskComponent(http) {
                    this.http = http;
                    this.statusList = ['STARTED', 'FINISHED', 'BETWEEN', 'CARRY-FORWARD'];
                    this.status = 'STARTED';
                    this.model = new task_1.Task(1, 'STARTED', 'Task 1', new Date(), new Date(), "Shitty task!");
                }
                TaskComponent.prototype.onSubmit = function (value) {
                    console.log("form value:" + JSON.stringify(this.model));
                    var path = '/api/achievements';
                    this.http.post('/api/achievements', JSON.stringify(this.model)).
                        subscribe(function (res) {
                        console.log(res.text());
                    });
                    console.log(this.http.get('/api/achievements'));
                };
                TaskComponent = __decorate([
                    core_1.Component({
                        selector: 'track-panel',
                        templateUrl: 'app/task.component.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TaskComponent);
                return TaskComponent;
            })();
            exports_1("TaskComponent", TaskComponent);
        }
    }
});
//# sourceMappingURL=task.component.js.map