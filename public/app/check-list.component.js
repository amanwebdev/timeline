/// <reference path="../../../typings/tsd.d.ts" />
System.register(['angular2/http', './checkList', 'angular2/core'], function(exports_1) {
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
    var http_1, checkList_1, core_1;
    var CheckListComponent;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (checkList_1_1) {
                checkList_1 = checkList_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CheckListComponent = (function () {
                function CheckListComponent(http) {
                    this.http = http;
                }
                CheckListComponent.prototype.ngOnInit = function () { };
                CheckListComponent.prototype.onSubmit = function (value) {
                    console.log("checkList value:" + JSON.stringify(this.checkList));
                    this.http.post('/checklist', JSON.stringify(this.checkList)).
                        subscribe(function (res) {
                        console.log(res.text());
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', checkList_1.CheckList)
                ], CheckListComponent.prototype, "checkList");
                CheckListComponent = __decorate([
                    core_1.Component({
                        selector: 'checklist',
                        templateUrl: 'app/check-list.component.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CheckListComponent);
                return CheckListComponent;
            })();
            exports_1("CheckListComponent", CheckListComponent);
        }
    }
});
//# sourceMappingURL=check-list.component.js.map