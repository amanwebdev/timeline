/// <reference path="../../../../typings/tsd.d.ts" />
System.register(['angular2/core', 'angular2/router', './components', 'ng2-bootstrap/ng2-bootstrap', 'angular2-modal/angular2-modal', '../models/user-settings'], function(exports_1, context_1) {
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
    var core_1, router_1, components_1, ng2_bootstrap_1, angular2_modal_1, user_settings_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (angular2_modal_1_1) {
                angular2_modal_1 = angular2_modal_1_1;
            },
            function (user_settings_1_1) {
                user_settings_1 = user_settings_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(modal) {
                    this.modal = modal;
                }
                AppComponent.prototype.openSettings = function () {
                    var resolvedBindings = core_1.Injector.resolve([core_1.provide(angular2_modal_1.ICustomModal, { useValue: new user_settings_1.UserSettings() })]), dialog = this.modal.open(components_1.ThemeChooser, resolvedBindings, new angular2_modal_1.ModalConfig('sm', true, 27));
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'time-sheet',
                        templateUrl: 'app/templates/app.component.html',
                        directives: [components_1.TaskComponent, components_1.TaskListComponent, ng2_bootstrap_1.DROPDOWN_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
                        providers: [angular2_modal_1.Modal]
                    }),
                    router_1.RouteConfig([
                        { path: '/track', name: 'Track', component: components_1.TaskComponent, useAsDefault: true },
                        { path: '/wip', name: 'WIP', component: components_1.TaskListComponent },
                        { path: '/history', name: 'History', component: components_1.HistoryComponent }
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