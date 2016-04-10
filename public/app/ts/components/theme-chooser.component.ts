/// <reference path="../../../../typings/tsd.d.ts" />

import {Modal, ModalDialogInstance, ICustomModal, ICustomModalComponent} from 'angular2-modal/angular2-modal';
import {Component} from 'angular2/core';

@Component({
  selector : 'theme-chooser',
  templateUrl: 'app/templates/theme-chooser.component.html'
})
export class ThemeChooser implements ICustomModalComponent {
  dialog: ModalDialogInstance;
  constructor(dialog: ModalDialogInstance, modelContentData?: ICustomModal) {
        this.dialog = dialog;
        //this.context = <AdditionCalculateWindowData>modelContentData;
        //this.wrongAnswer = true;
    }
    beforeDismiss(): boolean {
       return true;
   }

   beforeClose(): boolean {
       return true;
   }

}
