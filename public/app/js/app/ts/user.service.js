/// <reference path="../../../typings/tsd.d.ts" />
System.register(['angular2/core', 'angular2/http', './common/headers'], function(exports_1) {
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
    var core_1, http_1, headers_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (headers_1_1) {
                headers_1 = headers_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService(http) {
                    this.http = http;
                }
                UserService.prototype.login = function (user, pass, onSuccess) {
                    var body = JSON.stringify({ username: user, password: pass });
                    console.log("Logging in with :" + body);
                    this.http.post('/user/sessions/create', body, { headers: headers_1.contentHeaders }).
                        subscribe(function (response) {
                        localStorage.setItem('jwt', response.json().id_token);
                        console.log(response.text());
                        onSuccess();
                    }, function (error) {
                        alert(error.text());
                        console.log(error.text());
                    });
                };
                UserService.prototype.register = function (user, pass, onSuccess) {
                    var body = JSON.stringify({ username: user, password: pass });
                    console.log("Registering user with :" + body);
                    this.http.post('/user/register', body, { headers: headers_1.contentHeaders }).
                        subscribe(function (response) {
                        localStorage.setItem('jwt', response.json().id_token);
                        console.log(response.text());
                        onSuccess();
                    }, function (error) {
                        alert(error.text());
                        console.log(error.text());
                    });
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserService);
                return UserService;
            })();
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.service.js.map