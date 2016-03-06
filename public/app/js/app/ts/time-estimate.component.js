/// <reference path="../../../typings/tsd.d.ts" />
System.register(['angular2/core', './time-estimate'], function(exports_1) {
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
    var core_1, time_estimate_1;
    var TimeEstimateComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (time_estimate_1_1) {
                time_estimate_1 = time_estimate_1_1;
            }],
        execute: function() {
            TimeEstimateComponent = (function () {
                function TimeEstimateComponent() {
                    this.estimateChange = new core_1.EventEmitter();
                }
                TimeEstimateComponent.prototype.setValue = function (value) {
                    console.log("Tryin to set time estimate :" + JSON.stringify(value));
                    if (value && value instanceof time_estimate_1.TimeEstimate) {
                        this.timeEstimate = value;
                        console.log("Setting time estimate:" + JSON.stringify(value));
                    }
                };
                TimeEstimateComponent.prototype.incrementHours = function () {
                    ++this.timeEstimate.hours;
                    this.emitChange();
                };
                TimeEstimateComponent.prototype.decrementHours = function () {
                    --this.timeEstimate.hours;
                    this.emitChange();
                };
                TimeEstimateComponent.prototype.incrementMinutes = function () {
                    ++this.timeEstimate.minutes;
                    this.emitChange();
                };
                TimeEstimateComponent.prototype.decrementMinutes = function () {
                    --this.timeEstimate.minutes;
                    this.emitChange();
                };
                TimeEstimateComponent.prototype.emitChange = function () {
                    this.estimateChange.emit(this.timeEstimate);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], TimeEstimateComponent.prototype, "estimateChange");
                TimeEstimateComponent = __decorate([
                    core_1.Component({
                        selector: 'time-estimate, time-estimate',
                        templateUrl: 'app/templates/time-estimate.component.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], TimeEstimateComponent);
                return TimeEstimateComponent;
            })();
            exports_1("TimeEstimateComponent", TimeEstimateComponent);
        }
    }
});
//# sourceMappingURL=time-estimate.component.js.map