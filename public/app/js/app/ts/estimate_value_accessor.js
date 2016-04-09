System.register(['./components/time-estimate.component', 'angular2/core', 'angular2/common', 'angular2/src/facade/lang'], function(exports_1, context_1) {
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
    var time_estimate_component_1, core_1, common_1, lang_1;
    var CUSTOM_VALUE_ACCESSOR, EstimateValueAccessor;
    return {
        setters:[
            function (time_estimate_component_1_1) {
                time_estimate_component_1 = time_estimate_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            }],
        execute: function() {
            CUSTOM_VALUE_ACCESSOR = lang_1.CONST_EXPR(new core_1.Provider(common_1.NG_VALUE_ACCESSOR, { useExisting: core_1.forwardRef(function () { return EstimateValueAccessor; }), multi: true }));
            EstimateValueAccessor = (function () {
                function EstimateValueAccessor(host) {
                    this.host = host;
                    this.onChange = function (_) { };
                    this.onTouched = function () { };
                }
                EstimateValueAccessor.prototype.writeValue = function (value) {
                    this.host.setValue(value);
                };
                EstimateValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
                EstimateValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                EstimateValueAccessor = __decorate([
                    core_1.Directive({
                        selector: 'time-estimate',
                        host: { '(estimateChange)': 'onChange($event)' },
                        providers: [CUSTOM_VALUE_ACCESSOR]
                    }), 
                    __metadata('design:paramtypes', [time_estimate_component_1.TimeEstimateComponent])
                ], EstimateValueAccessor);
                return EstimateValueAccessor;
            }());
            exports_1("EstimateValueAccessor", EstimateValueAccessor);
        }
    }
});
//# sourceMappingURL=estimate_value_accessor.js.map