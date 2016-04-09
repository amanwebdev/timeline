/// <reference path="../../../../typings/tsd.d.ts" />
System.register(['angular2/core', 'angular2/router', './task.component', './task-list.component', './history.component', 'ng2-bootstrap/ng2-bootstrap', 'angular2-modal/angular2-modal'], function(exports_1, context_1) {
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
    var core_1, router_1, task_component_1, task_list_component_1, history_component_1, ng2_bootstrap_1, angular2_modal_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (task_component_1_1) {
                task_component_1 = task_component_1_1;
            },
            function (task_list_component_1_1) {
                task_list_component_1 = task_list_component_1_1;
            },
            function (history_component_1_1) {
                history_component_1 = history_component_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (angular2_modal_1_1) {
                angular2_modal_1 = angular2_modal_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(modal) {
                    this.modal = modal;
                }
                AppComponent.prototype.openSettings = function () {
                    this.modal.alert()
                        .size('lg')
                        .isBlocking(true)
                        .keyboard(27)
                        .title('Choose a theme')
                        .body('A Customized Modal')
                        .okBtn('Save')
                        .open();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'time-sheet',
                        templateUrl: 'app/templates/app.component.html',
                        directives: [task_component_1.TaskComponent, task_list_component_1.TaskListComponent, ng2_bootstrap_1.DROPDOWN_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
                        providers: [angular2_modal_1.Modal]
                    }),
                    router_1.RouteConfig([
                        { path: '/track', name: 'Track', component: task_component_1.TaskComponent, useAsDefault: true },
                        { path: '/wip', name: 'WIP', component: task_list_component_1.TaskListComponent },
                        { path: '/history', name: 'History', component: history_component_1.HistoryComponent }
                    ]), 
                    __metadata('design:paramtypes', [angular2_modal_1.Modal])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map