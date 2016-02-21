System.register([], function(exports_1) {
    var CheckList;
    return {
        setters:[],
        execute: function() {
            CheckList = (function () {
                function CheckList(taskId, name, itemList, id) {
                    this.taskId = taskId;
                    this.name = name;
                    this.itemList = itemList;
                    this.id = id;
                }
                return CheckList;
            })();
            exports_1("CheckList", CheckList);
        }
    }
});
//# sourceMappingURL=checkList.js.map