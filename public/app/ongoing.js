System.register(['./checkList', './item'], function(exports_1) {
    var checkList_1, item_1;
    var Ongoing;
    return {
        setters:[
            function (checkList_1_1) {
                checkList_1 = checkList_1_1;
            },
            function (item_1_1) {
                item_1 = item_1_1;
            }],
        execute: function() {
            Ongoing = (function () {
                function Ongoing(task) {
                    this.task = task;
                    this.name = task.name;
                    this.checkListProgress = 25;
                    this.timeProgress = 50;
                    this.hasCheckList = false;
                    this.checkList = new checkList_1.CheckList(1, "first checklist", [new item_1.Item(1, "first item")]);
                    this.setProgress();
                }
                Ongoing.prototype.setProgress = function () {
                    // var currTime = new Date();
                    // var startTime = new Date(this.task.startTime);
                    // var finishTime = new Date(this.task.finishTime); 
                    // 	var usedTime = Math.floor((currTime-startTime) / 1000 / 60 / 60);
                    // 	var estimated = Math.floor((finishTime-startTime) / 1000 / 60 / 60);
                    // 	this.timeProgress = usedTime/estimated;
                };
                return Ongoing;
            })();
            exports_1("Ongoing", Ongoing);
        }
    }
});
//# sourceMappingURL=ongoing.js.map