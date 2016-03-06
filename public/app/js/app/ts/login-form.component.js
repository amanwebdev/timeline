/// <reference path="../../../typings/tsd.d.ts" />
System.register(['angular2/core', 'angular2/router', 'angular2/http', './user.service'], function(exports_1) {
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
    var core_1, router_1, http_1, user_service_1;
    var LogInFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            LogInFormComponent = (function () {
                function LogInFormComponent(http, _router, _userService) {
                    this.http = http;
                    this._router = _router;
                    this._userService = _userService;
                }
                LogInFormComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this._userService.login(this.username, this.password, function () { return _this._router.navigate(['App']); });
                };
                LogInFormComponent.prototype.signUp = function () {
                    this._router.navigate(['SignUp']);
                };
                LogInFormComponent = __decorate([
                    core_1.Component({
                        selector: 'login-form',
                        templateUrl: 'app/templates/login-form.component.html',
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router, user_service_1.UserService])
                ], LogInFormComponent);
                return LogInFormComponent;
            })();
            exports_1("LogInFormComponent", LogInFormComponent);
        }
    }
});
//# sourceMappingURL=login-form.component.js.map