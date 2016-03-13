/// <reference path="../../../typings/tsd.d.ts" />
System.register(['angular2/http', './checkList', 'angular2/core', './item', './wip.service'], function(exports_1) {
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
    var http_1, checkList_1, core_1, item_1, wip_service_1;
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
            function (wip_service_1_1) {
                wip_service_1 = wip_service_1_1;
            }],
        execute: function() {
            MAX_ITEMS = 3;
            CheckListComponent = (function () {
                function CheckListComponent(http, _service) {
                    this.http = http;
                    this._service = _service;
                    this.itemList = new Array();
                    this.visibleItemList = new Array();
                    this.itemPage = 0;
                }
                CheckListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getListItems(this.checkList.task_id)
                        .subscribe(function (items) {
                        _this.itemList = items;
                        _this.updateVisibleList();
                    });
                };
                CheckListComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this._service.saveCheckList(this.checkList)
                        .subscribe(function (list) { return _this.checkList = list; });
                    this._service.saveItemList(this.itemList)
                        .subscribe(function (items) { return _this.itemList = items; });
                    this.updateVisibleList();
                };
                CheckListComponent.prototype.addNewItem = function () {
                    this.itemList.unshift(new item_1.Item(null, "Item...", false, this.checkList.task_id));
                    this.updateVisibleList();
                };
                CheckListComponent.prototype.deleteItem = function (item) {
                    var _this = this;
                    //TODO: needs update in case of transient item.
                    this._service.deleteItem(item)
                        .subscribe(function (items) { return _this.itemList = items; });
                    this.updateVisibleList();
                };
                CheckListComponent.prototype.itemListNavNext = function () {
                    if (this.itemPage != (this.itemList.length / 3) - 1) {
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
                    if (this.itemList.length >= MAX_ITEMS) {
                        var startIndex;
                        var endIndex;
                        if ((this.itemList.length / MAX_ITEMS) >= (this.itemPage + 1)) {
                            startIndex = this.itemPage * MAX_ITEMS;
                            endIndex = startIndex + MAX_ITEMS;
                        }
                        else {
                            startIndex = this.itemList.length - MAX_ITEMS;
                            endIndex = this.itemList.length;
                        }
                        console.log("Showing items b/w :" + startIndex + "," + endIndex);
                        this.visibleItemList = this.itemList.slice(startIndex, endIndex);
                    }
                    else {
                        this.visibleItemList = this.itemList;
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
                    __metadata('design:paramtypes', [http_1.Http, wip_service_1.WipService])
                ], CheckListComponent);
                return CheckListComponent;
            })();
            exports_1("CheckListComponent", CheckListComponent);
        }
    }
});
//# sourceMappingURL=check-list.component.js.map