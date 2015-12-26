/// <reference path="../../../typings/tsd.d.ts" />
System.register(['angular2/core', 'angular2/router', './wip.service', './check-list.component'], function(exports_1) {
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
    var core_1, router_1, wip_service_1, check_list_component_1;
    var TaskListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (wip_service_1_1) {
                wip_service_1 = wip_service_1_1;
            },
            function (check_list_component_1_1) {
                check_list_component_1 = check_list_component_1_1;
            }],
        execute: function() {
            TaskListComponent = (function () {
                function TaskListComponent(_router, _service) {
                    this._router = _router;
                    this._service = _service;
                }
                TaskListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getWipList().then(function (wipList) { return _this.wipList = wipList; });
                };
                TaskListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/task-list.component.html',
                        directives: [check_list_component_1.CheckListComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, wip_service_1.WipService])
                ], TaskListComponent);
                return TaskListComponent;
            })();
            exports_1("TaskListComponent", TaskListComponent);
        }
    }
});
//# sourceMappingURL=task-list.component.js.map