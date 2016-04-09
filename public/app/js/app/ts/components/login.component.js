/// <reference path="../../../../typings/tsd.d.ts" />
System.register(['angular2/core', 'angular2/router', './app.component', './login-form.component', './signup-form.component', '../LoggedInOutlet'], function(exports_1, context_1) {
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
    var core_1, router_1, app_component_1, login_form_component_1, signup_form_component_1, LoggedInOutlet_1;
    var LogInComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (login_form_component_1_1) {
                login_form_component_1 = login_form_component_1_1;
            },
            function (signup_form_component_1_1) {
                signup_form_component_1 = signup_form_component_1_1;
            },
            function (LoggedInOutlet_1_1) {
                LoggedInOutlet_1 = LoggedInOutlet_1_1;
            }],
        execute: function() {
            LogInComponent = (function () {
                function LogInComponent() {
                }
                LogInComponent = __decorate([
                    core_1.Component({
                        selector: 'time-sheet',
                        template: "<router-outlet></router-outlet>",
                        directives: [app_component_1.AppComponent, login_form_component_1.LogInFormComponent, LoggedInOutlet_1.LoggedInRouterOutlet]
                    }),
                    router_1.RouteConfig([
                        { path: '/login', name: 'LogIn', component: login_form_component_1.LogInFormComponent },
                        { path: '/register', name: 'SignUp', component: signup_form_component_1.SignUpFormComponent },
                        { path: '/app/...', name: 'App', component: app_component_1.AppComponent, useAsDefault: true },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], LogInComponent);
                return LogInComponent;
            }());
            exports_1("LogInComponent", LogInComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map