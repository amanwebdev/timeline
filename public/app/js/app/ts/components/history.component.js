/// <reference path="../../../../typings/tsd.d.ts" />
System.register(['angular2/core', './progress-graph.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, progress_graph_component_1;
    var HistoryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (progress_graph_component_1_1) {
                progress_graph_component_1 = progress_graph_component_1_1;
            }],
        execute: function() {
            HistoryComponent = (function () {
                function HistoryComponent() {
                    this.showChecklist = false;
                }
                HistoryComponent.prototype.ngOnInit = function () {
                    this.graphData = [
                        { date: '1-May-12', close: '1' },
                        { date: '30-Apr-12', close: '2' },
                        { date: '27-Apr-12', close: '3' },
                        { date: '26-Apr-12', close: '4' }
                    ];
                };
                HistoryComponent.prototype.toggleChecklist = function () {
                    this.showChecklist = !this.showChecklist;
                    console.log("Check list is shown :" + this.showChecklist);
                };
                HistoryComponent = __decorate([
                    core_1.Component({
                        selector: 'history',
                        templateUrl: 'app/templates/history.component.html',
                        directives: [progress_graph_component_1.ProgressGraphComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HistoryComponent);
                return HistoryComponent;
            })();
            exports_1("HistoryComponent", HistoryComponent);
        }
    }
});
//# sourceMappingURL=history.component.js.map