/// <reference path="../../../../typings/tsd.d.ts" />

import { Component, Input, Self, EventEmitter, Output }		from 'angular2/core';
import { NgControl, ControlValueAccessor, NgModel } 		from 'angular2/common';
import { TimeEstimate }										from '../models/time-estimate';

@Component({
	selector: 'editable',
	templateUrl: 'app/templates/editable.component.html',

})
export class EditableComponent {
	@Input() model: string;
	editableClass: String = "editable";
	editFieldClass: String = "editableField";
	editDisabled: Boolean = true;

	constructor() {
		
	}
	editField(editableField): void {
		this.editDisabled = false;
		this.editableClass = "editableActive";
		editableField.focus();
	}
	cancelEdit(): void {
		this.editDisabled = true;
		this.editableClass = "editable";
	}
}