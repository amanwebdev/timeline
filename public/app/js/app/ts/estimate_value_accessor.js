System.register(['./time-estimate.component', 'angular2/core', 'angular2/common', 'angular2/src/facade/lang'], function(exports_1) {
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
            })();
            exports_1("EstimateValueAccessor", EstimateValueAccessor);
        }
    }
});
//# sourceMappingURL=estimate_value_accessor.js.map