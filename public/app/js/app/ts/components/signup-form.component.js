/// <reference path="../../../../typings/tsd.d.ts" />
System.register(['angular2/core', 'angular2/router', 'angular2/http', '../services/user.service'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, user_service_1;
    var SignUpFormComponent;
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
            SignUpFormComponent = (function () {
                function SignUpFormComponent(http, _router, _userService) {
                    this.http = http;
                    this._router = _router;
                    this._userService = _userService;
                }
                SignUpFormComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this._userService.register(this.username, this.password, function () { return _this._router.navigate(['App']); });
                };
                SignUpFormComponent.prototype.backToLogin = function () {
                    this._router.navigate(['LogIn']);
                };
                SignUpFormComponent = __decorate([
                    core_1.Component({
                        selector: 'signup-form',
                        templateUrl: 'app/templates/signup-form.component.html',
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router, user_service_1.UserService])
                ], SignUpFormComponent);
                return SignUpFormComponent;
            }());
            exports_1("SignUpFormComponent", SignUpFormComponent);
        }
    }
});
//# sourceMappingURL=signup-form.component.js.map