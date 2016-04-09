/// <reference path="../../../../typings/tsd.d.ts" />
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TimeEstimate;
    return {
        setters:[],
        execute: function() {
            TimeEstimate = (function () {
                function TimeEstimate(hours, minutes) {
                    this.hours = hours;
                    this.minutes = minutes;
                }
                return TimeEstimate;
            }());
            exports_1("TimeEstimate", TimeEstimate);
        }
    }
});
//# sourceMappingURL=time-estimate.js.map