/// <reference path="../../../../typings/tsd.d.ts" />
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ArrayOps;
    return {
        setters:[],
        execute: function() {
            ArrayOps = (function () {
                function ArrayOps() {
                }
                ArrayOps.remove = function (arr, item) {
                    for (var i = arr.length; i--;) {
                        if (arr[i] === item) {
                            arr.splice(i, 1);
                        }
                    }
                };
                return ArrayOps;
            }());
            exports_1("ArrayOps", ArrayOps);
        }
    }
});
//# sourceMappingURL=arrayOp.js.map