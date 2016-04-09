/// <reference path="../../../../typings/tsd.d.ts" />
System.register(['angular2/router', 'angular2/core', '../services/wip.service', './check-list.component', './editable.component', './progress.component', 'ng2-bootstrap/ng2-bootstrap'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var router_1, core_1, wip_service_1, check_list_component_1, editable_component_1, progress_component_1, ng2_bootstrap_1;
    var TaskListComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
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
            function (progress_component_1_1) {
                progress_component_1 = progress_component_1_1;
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
                    this.alerts = [];
                    this.statusList = ['To Do', 'In Progress', 'Review', 'Finished'];
                }
                TaskListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getWipList()
                        .subscribe(function (wipList) {
                        _this.wipList = wipList;
                        if (_this.wipList) {
                            _this.totalItems = _this.wipList.length;
                            _this.updateCurrentPageItems();
                            if (_this.wipList.length < 5) {
                                _this.addAlert();
                            }
                        }
                    });
                };
                TaskListComponent.prototype.addAlert = function () {
                    this.alerts.push({
                        type: 'info',
                        msg: "Looks like you've just started!",
                        closable: true
                    });
                };
                TaskListComponent.prototype.closeAlert = function (i) {
                    this.alerts.splice(i, 1);
                };
                TaskListComponent.prototype.toggleCheckList = function (wip) {
                    var _this = this;
                    if (wip.hideCheckList) {
                        this._service.getCheckList(wip.taskId)
                            .subscribe(function (list) {
                            wip.checkList = list;
                            if (wip.checkList)
                                _this.toggleListVisibility(wip);
                        });
                    }
                    else {
                        this.toggleListVisibility(wip);
                    }
                };
                TaskListComponent.prototype.toggleListVisibility = function (wip) {
                    console.log("Toggling visibility of checklist!");
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
                        directives: [check_list_component_1.CheckListComponent, editable_component_1.EditableComponent, progress_component_1.ProgressComponent, ng2_bootstrap_1.Alert, ng2_bootstrap_1.TYPEAHEAD_DIRECTIVES, ng2_bootstrap_1.PAGINATION_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, wip_service_1.WipService])
                ], TaskListComponent);
                return TaskListComponent;
            }());
            exports_1("TaskListComponent", TaskListComponent);
        }
    }
});
//# sourceMappingURL=task-list.component.js.map