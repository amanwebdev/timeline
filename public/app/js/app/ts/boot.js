/// <reference path="../../../typings/tsd.d.ts" />
System.register(['angular2/platform/browser', 'angular2/router', 'angular2/http', 'angular2/core', './services/wip.service', './services/user.service', './components/app.component', 'angular2-modal/angular2-modal', 'angular2/platform/common_dom'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, router_1, http_1, core_1, wip_service_1, user_service_1, app_component_1, core_2, angular2_modal_1, common_dom_1;
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
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (wip_service_1_1) {
                wip_service_1 = wip_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (angular2_modal_1_1) {
                angular2_modal_1 = angular2_modal_1_1;
            },
            function (common_dom_1_1) {
                common_dom_1 = common_dom_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS, wip_service_1.WipService, user_service_1.UserService, http_1.HTTP_PROVIDERS, core_1.ElementRef,
                core_2.provide(angular2_modal_1.ModalConfig, { useValue: new angular2_modal_1.ModalConfig('lg', true, 81) }),
                common_dom_1.ELEMENT_PROBE_PROVIDERS // remove in production
            ]).catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=boot.js.map