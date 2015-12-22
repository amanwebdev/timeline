/// <reference path="../../typings/tsd.d.ts" />
System.register(['angular2/core', 'angular2/router', './wip.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, wip_service_1;
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
                        templateUrl: 'app/task-list.component.html'
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