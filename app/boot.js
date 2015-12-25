/// <reference path="../../typings/tsd.d.ts" />
System.register(['angular2/platform/browser', 'angular2/router', './wip.service', './app.component'], function(exports_1) {
    var browser_1, router_1, wip_service_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (wip_service_1_1) {
                wip_service_1 = wip_service_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS, wip_service_1.WipService
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map