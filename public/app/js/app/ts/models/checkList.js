System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CheckList;
    return {
        setters:[],
        execute: function() {
            CheckList = (function () {
                function CheckList(name, task_id) {
                    this.name = name;
                    this.task_id = task_id;
                }
                return CheckList;
            }());
            exports_1("CheckList", CheckList);
        }
    }
});
//# sourceMappingURL=checkList.js.map