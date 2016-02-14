/// <reference path="../../../typings/tsd.d.ts" />
System.register(['angular2/platform/browser', 'angular2/router', 'angular2/http', './wip.service', './user.service', './login.component', 'angular2/core'], function(exports_1) {
    var browser_1, router_1, http_1, wip_service_1, user_service_1, login_component_1, core_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (wip_service_1_1) {
                wip_service_1 = wip_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(login_component_1.LogInComponent, [
                router_1.ROUTER_PROVIDERS, wip_service_1.WipService, user_service_1.UserService, http_1.HTTP_PROVIDERS, core_1.ElementRef
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map