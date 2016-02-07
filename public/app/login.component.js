/// <reference path="../../../typings/tsd.d.ts" />
System.register(['angular2/core', 'angular2/router', './app.component', './login-form.component'], function(exports_1) {
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
    var core_1, router_1, app_component_1, login_form_component_1;
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
            }],
        execute: function() {
            LogInComponent = (function () {
                function LogInComponent() {
                }
                LogInComponent = __decorate([
                    core_1.Component({
                        selector: 'time-sheet',
                        template: "<router-outlet></router-outlet>",
                        directives: [app_component_1.AppComponent, login_form_component_1.LogInFormComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/login', name: 'LogIn', component: login_form_component_1.LogInFormComponent, useAsDefault: true },
                        { path: '/app/...', name: 'App', component: app_component_1.AppComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], LogInComponent);
                return LogInComponent;
            })();
            exports_1("LogInComponent", LogInComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map