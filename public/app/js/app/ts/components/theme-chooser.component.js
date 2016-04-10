/// <reference path="../../../../typings/tsd.d.ts" />
System.register(['angular2-modal/angular2-modal', 'angular2/core'], function(exports_1, context_1) {
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
    var angular2_modal_1, core_1;
    var ThemeChooser;
    return {
        setters:[
            function (angular2_modal_1_1) {
                angular2_modal_1 = angular2_modal_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ThemeChooser = (function () {
                function ThemeChooser(dialog, modelContentData) {
                    this.dialog = dialog;
                    //this.context = <AdditionCalculateWindowData>modelContentData;
                    //this.wrongAnswer = true;
                }
                ThemeChooser.prototype.beforeDismiss = function () {
                    return true;
                };
                ThemeChooser.prototype.beforeClose = function () {
                    return true;
                };
                ThemeChooser = __decorate([
                    core_1.Component({
                        selector: 'theme-chooser',
                        templateUrl: 'app/templates/theme-chooser.component.html'
                    }), 
                    __metadata('design:paramtypes', [angular2_modal_1.ModalDialogInstance, angular2_modal_1.ICustomModal])
                ], ThemeChooser);
                return ThemeChooser;
            }());
            exports_1("ThemeChooser", ThemeChooser);
        }
    }
});
//# sourceMappingURL=theme-chooser.component.js.map