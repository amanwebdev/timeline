/// <reference path="../../../typings/tsd.d.ts" />

import {bootstrap}    from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {WipService}      from  './wip.service';
import {AppComponent} from './app.component';
import {Http} from 'angular2/http';
import {ElementRef} from 'angular2/core';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,WipService,HTTP_PROVIDERS,ElementRef
]);