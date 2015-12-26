System.register([], function(exports_1) {
    var Ongoing;
    return {
        setters:[],
        execute: function() {
            Ongoing = (function () {
                function Ongoing(task) {
                    this.task = task;
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