/// <reference path="../../../typings/tsd.d.ts" />
System.register([], function(exports_1) {
    var CheckList;
    return {
        setters:[],
        execute: function() {
            CheckList = (function () {
                function CheckList(taskId) {
                    this.taskId = taskId;
                }
                return CheckList;
            })();
            exports_1("CheckList", CheckList);
        }
    }
});
//# sourceMappingURL=checkList.js.map