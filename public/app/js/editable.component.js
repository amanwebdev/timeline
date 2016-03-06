/// <reference path="../../../typings/tsd.d.ts" />
System.register(['angular2/core'], function(exports_1) {
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
    var core_1;
    var EditableComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EditableComponent = (function () {
                function EditableComponent() {
                    this.editableClass = "editable";
                    this.editFieldClass = "editableField";
                    this.editDisabled = true;
                }
                EditableComponent.prototype.editField = function (editableField) {
                    this.editDisabled = false;
                    this.editableClass = "editableActive";
                    editableField.focus();
                };
                EditableComponent.prototype.cancelEdit = function () {
                    this.editDisabled = true;
                    this.editableClass = "editable";
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], EditableComponent.prototype, "model");
                EditableComponent = __decorate([
                    core_1.Component({
                        selector: 'editable',
                        templateUrl: 'app/templates/editable.component.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], EditableComponent);
                return EditableComponent;
            })();
            exports_1("EditableComponent", EditableComponent);
        }
    }
});
//# sourceMappingURL=editable.component.js.map