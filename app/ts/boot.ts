/// <reference path="../../typings/tsd.d.ts" />
import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {WipService}      from  './wip.service';
import {ROUTER_PROVIDERS} from 'angular2/router';
bootstrap(AppComponent, [
  ROUTER_PROVIDERS,WipService
]);