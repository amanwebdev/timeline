/// <reference path="../../../../typings/tsd.d.ts" />
System.register([], function(exports_1) {
    var TaskUtil;
    return {
        setters:[],
        execute: function() {
            TaskUtil = (function () {
                function TaskUtil(_service) {
                    this._service = _service;
                }
                TaskUtil.prototype.getProgress = function (wip) {
                    return 0;
                };
                return TaskUtil;
            })();
            exports_1("TaskUtil", TaskUtil);
        }
    }
});
//# sourceMappingURL=task-util.js.map