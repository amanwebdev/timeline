/// <reference path="../../../../typings/tsd.d.ts" />
System.register(['angular2/core', '../services/wip.service', './task-detail.component'], function(exports_1) {
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
    var core_1, wip_service_1, task_detail_component_1;
    var HistoryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (wip_service_1_1) {
                wip_service_1 = wip_service_1_1;
            },
            function (task_detail_component_1_1) {
                task_detail_component_1 = task_detail_component_1_1;
            }],
        execute: function() {
            HistoryComponent = (function () {
                function HistoryComponent(_service) {
                    this._service = _service;
                    this.showChecklist = false;
                    this.taskListPage = 0;
                }
                HistoryComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getWipListBw(1, 2)
                        .subscribe(function (wipList) {
                        _this.wipList = wipList;
                        if (_this.wipList[0]) {
                            _this.selectedWip = _this.wipList[0];
                            console.log("selected wip:" + JSON.stringify(_this.selectedWip));
                        }
                    });
                };
                HistoryComponent.prototype.setCurrentTask = function (wip) {
                    this.selectedWip = wip;
                };
                HistoryComponent = __decorate([
                    core_1.Component({
                        selector: 'history',
                        templateUrl: 'app/templates/history.component.html',
                        directives: [task_detail_component_1.TaskDetail]
                    }), 
                    __metadata('design:paramtypes', [wip_service_1.WipService])
                ], HistoryComponent);
                return HistoryComponent;
            })();
            exports_1("HistoryComponent", HistoryComponent);
        }
    }
});
//# sourceMappingURL=history.component.js.map