/// <reference path="../typings/tsd.d.ts" />

import {Component}         from 'angular2/core';
import {TaskComponent} from './task.component'
// import {HeroFormComponent} from './hero-form.component'
// @Component({
//   selector: 'my-app',
//   template: '<hero-form></hero-form>',
//   directives: [HeroFormComponent]
// })
@Component({
  selector: 'my-app',
  template: '<track-panel></track-panel>',
  directives: [TaskComponent]
})
export class AppComponent { }