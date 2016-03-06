/// <reference path="../../../typings/tsd.d.ts" />
System.register(['angular2/http', './checkList', 'angular2/core', './item', './common/arrayOp'], function(exports_1) {
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
    var http_1, checkList_1, core_1, item_1, arrayOp_1;
    var MAX_ITEMS, CheckListComponent;
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
            },
            function (item_1_1) {
                item_1 = item_1_1;
            },
            function (arrayOp_1_1) {
                arrayOp_1 = arrayOp_1_1;
            }],
        execute: function() {
            MAX_ITEMS = 3;
            CheckListComponent = (function () {
                function CheckListComponent(http) {
                    this.http = http;
                    this.itemPage = 0;
                }
                CheckListComponent.prototype.ngOnInit = function () {
                    this.updateVisibleList();
                };
                CheckListComponent.prototype.onSubmit = function (value) {
                    console.log("checkList value:" + JSON.stringify(this.checkList));
                    this.http.post('/checklist', JSON.stringify(this.checkList)).
                        subscribe(function (res) {
                        console.log(res.text());
                    });
                };
                CheckListComponent.prototype.addNewItem = function () {
                    this.checkList.itemList.push(new item_1.Item("Item...", false));
                    this.updateVisibleList();
                };
                CheckListComponent.prototype.deleteItem = function (item) {
                    arrayOp_1.ArrayOps.remove(this.checkList.itemList, item);
                };
                CheckListComponent.prototype.itemListNavNext = function () {
                    if (this.itemPage != this.checkList.itemList.length) {
                        ++this.itemPage;
                    }
                    this.updateVisibleList();
                };
                CheckListComponent.prototype.itemListNavPrev = function () {
                    if (this.itemPage != 0) {
                        --this.itemPage;
                    }
                    this.updateVisibleList();
                };
                CheckListComponent.prototype.updateVisibleList = function () {
                    if (this.checkList.itemList.length >= MAX_ITEMS) {
                        var startIndex;
                        var endIndex;
                        if ((this.checkList.itemList.length / MAX_ITEMS) >= (this.itemPage + 1)) {
                            startIndex = this.itemPage * MAX_ITEMS;
                            endIndex = startIndex + MAX_ITEMS;
                        }
                        else {
                            startIndex = this.checkList.itemList.length - MAX_ITEMS;
                            endIndex = this.checkList.itemList.length;
                        }
                        console.log("Showing items b/w :" + startIndex + "," + endIndex);
                        this.visibleItemList = this.checkList
                            .itemList.slice(startIndex, endIndex);
                    }
                    else {
                        this.visibleItemList = this.checkList.itemList;
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', checkList_1.CheckList)
                ], CheckListComponent.prototype, "checkList");
                CheckListComponent = __decorate([
                    core_1.Component({
                        selector: 'checklist',
                        templateUrl: 'app/templates/check-list.component.html'
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