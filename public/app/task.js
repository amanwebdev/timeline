System.register([], function(exports_1) {
    var Task;
    return {
        setters:[],
        execute: function() {
            Task = (function () {
                function Task(id, status, name, startTime, finishTime, comments, checkList, user) {
                    this.id = id;
                    this.status = status;
                    this.name = name;
                    this.startTime = startTime;
                    this.finishTime = finishTime;
                    this.comments = comments;
                    this.checkList = checkList;
                    this.user = user;
                }
                return Task;
            })();
            exports_1("Task", Task);
        }
    }
});
//# sourceMappingURL=task.js.map