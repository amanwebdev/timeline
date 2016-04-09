/// <reference path="../../../../typings/tsd.d.ts" />
System.register(['angular2/core', '../models/ongoing', '../services/wip.service'], function(exports_1, context_1) {
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
    var core_1, ongoing_1, wip_service_1;
    var ProgressComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ongoing_1_1) {
                ongoing_1 = ongoing_1_1;
            },
            function (wip_service_1_1) {
                wip_service_1 = wip_service_1_1;
            }],
        execute: function() {
            ProgressComponent = (function () {
                function ProgressComponent(_wipService) {
                    this._wipService = _wipService;
                }
                ProgressComponent.prototype.ngOnInit = function () {
                    this.setCheckListProgress();
                    this.setTimeProgress();
                };
                ProgressComponent.prototype.setCheckListProgress = function () {
                    var _this = this;
                    this._wipService
                        .getChecklistProgress(this.wip.taskId).
                        subscribe(function (res) {
                        _this.checkListProgress = res.progress ? res.progress * 100 : 0;
                        console.log("progress check list:" + _this.checkListProgress);
                    });
                };
                ProgressComponent.prototype.setTimeProgress = function () {
                    var _this = this;
                    this._wipService
                        .getTimeProgress(this.wip.taskId).
                        subscribe(function (res) {
                        _this.timeProgress = res.progress;
                        console.log("time progress:" + _this.timeProgress);
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', ongoing_1.Ongoing)
                ], ProgressComponent.prototype, "wip", void 0);
                ProgressComponent = __decorate([
                    core_1.Component({
                        selector: "task-progress",
                        templateUrl: 'app/templates/progress.component.html',
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [wip_service_1.WipService])
                ], ProgressComponent);
                return ProgressComponent;
            }());
            exports_1("ProgressComponent", ProgressComponent);
        }
    }
});
//# sourceMappingURL=progress.component.js.map