/// <reference path="../../../../typings/tsd.d.ts" />
System.register(['angular2/core', 'angular2/common', 'angular2/http', 'angular2/router', '../models/task', '../models/time-estimate', './time-estimate.component', '../estimate_value_accessor', '../services/wip.service'], function(exports_1) {
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
    var core_1, common_1, http_1, router_1, task_1, time_estimate_1, time_estimate_component_1, estimate_value_accessor_1, wip_service_1;
    var TaskComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (task_1_1) {
                task_1 = task_1_1;
            },
            function (time_estimate_1_1) {
                time_estimate_1 = time_estimate_1_1;
            },
            function (time_estimate_component_1_1) {
                time_estimate_component_1 = time_estimate_component_1_1;
            },
            function (estimate_value_accessor_1_1) {
                estimate_value_accessor_1 = estimate_value_accessor_1_1;
            },
            function (wip_service_1_1) {
                wip_service_1 = wip_service_1_1;
            }],
        execute: function() {
            TaskComponent = (function () {
                function TaskComponent(http, _router, _wipService, _builder) {
                    this.http = http;
                    this._router = _router;
                    this._wipService = _wipService;
                    this._builder = _builder;
                    this.model = new task_1.Task();
                    this.model.status = "STARTED";
                    this.model.name = "Task 1";
                    this.model.comments = "Shitty Task!";
                    this.model.timeEstimate = new time_estimate_1.TimeEstimate(1, 20);
                    this.taskForm = _builder.group({
                        status: ["", common_1.Validators.required],
                        name: ["", common_1.Validators.required],
                        timeEstimate: ["", common_1.Validators.required],
                        comments: ["", common_1.Validators.required]
                    });
                }
                TaskComponent.prototype.onSubmit = function (value) {
                    var _this = this;
                    console.log("estimate : " + JSON.stringify(value.timeEstimate));
                    this._wipService.saveWip(value, function () { return _this._router.navigate(['WIP']); });
                };
                TaskComponent = __decorate([
                    core_1.Component({
                        selector: 'track-panel',
                        templateUrl: 'app/templates/task.component.html',
                        directives: [time_estimate_component_1.TimeEstimateComponent, estimate_value_accessor_1.EstimateValueAccessor]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router, wip_service_1.WipService, common_1.FormBuilder])
                ], TaskComponent);
                return TaskComponent;
            })();
            exports_1("TaskComponent", TaskComponent);
        }
    }
});
//# sourceMappingURL=task.component.js.map