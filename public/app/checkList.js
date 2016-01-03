System.register([], function(exports_1) {
    var CheckList;
    return {
        setters:[],
        execute: function() {
            CheckList = (function () {
                function CheckList(id, taskId, name, itemList) {
                    this.id = id;
                    this.taskId = taskId;
                    this.name = name;
                    this.itemList = itemList;
                }
                return CheckList;
            })();
            exports_1("CheckList", CheckList);
        }
    }
});
//# sourceMappingURL=checkList.js.map