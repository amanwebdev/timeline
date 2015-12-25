/// <reference path="../../../typings/tsd.d.ts" />
System.register([], function(exports_1) {
    var Task;
    return {
        setters:[],
        execute: function() {
            Task = (function () {
                function Task(id, status, name, startTime, finishTime, comments) {
                    this.id = id;
                    this.status = status;
                    this.name = name;
                    this.startTime = startTime;
                    this.finishTime = finishTime;
                    this.comments = comments;
                }
                return Task;
            })();
            exports_1("Task", Task);
        }
    }
});
//# sourceMappingURL=task.js.map