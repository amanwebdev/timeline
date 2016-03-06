/// <reference path="../../../typings/tsd.d.ts" />
System.register(['angular2/router', 'angular2/core', './item', './checkList', './wip.service', './check-list.component', './editable.component', 'ng2-bootstrap/ng2-bootstrap'], function(exports_1) {
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
    var router_1, core_1, item_1, checkList_1, wip_service_1, check_list_component_1, editable_component_1, ng2_bootstrap_1;
    var TaskListComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (item_1_1) {
                item_1 = item_1_1;
            },
            function (checkList_1_1) {
                checkList_1 = checkList_1_1;
            },
            function (wip_service_1_1) {
                wip_service_1 = wip_service_1_1;
            },
            function (check_list_component_1_1) {
                check_list_component_1 = check_list_component_1_1;
            },
            function (editable_component_1_1) {
                editable_component_1 = editable_component_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            }],
        execute: function() {
            TaskListComponent = (function () {
                function TaskListComponent(_router, _service) {
                    this._router = _router;
                    this._service = _service;
                    this.currentPage = 0;
                    this.itemsPerPage = 5;
                }
                TaskListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getWipList()
                        .subscribe(function (wipList) {
                        _this.wipList = wipList;
                        if (_this.wipList) {
                            _this.totalItems = _this.wipList.length;
                            _this.updateCurrentPageItems();
                        }
                    });
                };
                TaskListComponent.prototype.toggleCheckList = function (wip) {
                    if (!wip.checkList) {
                        wip.checkList
                            = new checkList_1.CheckList(wip.taskId, "Checklist...", [new item_1.Item("Item...", false)]);
                    }
                    wip.hideCheckList = !wip.hideCheckList;
                    wip.taskClass = wip.hideCheckList ? "list-group-item" : "list-group-item noBottomBorder";
                    wip.checkListClass = wip.hideCheckList ? "list-group-item hidden" : "list-group-item noTopBorder";
                };
                TaskListComponent.prototype.pageChanged = function (event) {
                    console.log('Page changed to: ' + event.page);
                    console.log('Number items per page: ' + event.itemsPerPage);
                    this.currentPage = event.page;
                    this.updateCurrentPageItems();
                };
                TaskListComponent.prototype.updateCurrentPageItems = function () {
                    if (this.wipList) {
                        this.currentPageItems = this.wipList
                            .slice(this.currentPage, this.currentPage + this.itemsPerPage);
                        console.log("total page items:" + this.wipList.length
                            + ", current page:" + this.currentPage + ", items per page:" + this.itemsPerPage);
                    }
                };
                TaskListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/templates/task-list.component.html',
                        directives: [check_list_component_1.CheckListComponent, editable_component_1.EditableComponent, ng2_bootstrap_1.PAGINATION_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, wip_service_1.WipService])
                ], TaskListComponent);
                return TaskListComponent;
            })();
            exports_1("TaskListComponent", TaskListComponent);
        }
    }
});
//# sourceMappingURL=task-list.component.js.map