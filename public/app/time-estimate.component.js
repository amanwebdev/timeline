/// <reference path="../../../typings/tsd.d.ts" />
System.register(['angular2/core'], function(exports_1) {
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
    var core_1;
    var TimeEstimate;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TimeEstimate = (function () {
                function TimeEstimate() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], TimeEstimate.prototype, "hours");
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], TimeEstimate.prototype, "minutes");
                TimeEstimate = __decorate([
                    core_1.Component({
                        selector: 'time-estimate',
                        templateUrl: 'app/time-estimate.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TimeEstimate);
                return TimeEstimate;
            })();
            exports_1("TimeEstimate", TimeEstimate);
        }
    }
});
//# sourceMappingURL=time-estimate.component.js.map