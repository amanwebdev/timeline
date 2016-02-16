/// <reference path="../../../typings/tsd.d.ts" />

import {bootstrap}    from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {WipService}      from  './wip.service';
import {UserService}      from  './user.service';
import {AppComponent} from './app.component';
import {ElementRef} from 'angular2/core';

bootstrap(AppComponent, [
	ROUTER_PROVIDERS, WipService, UserService, HTTP_PROVIDERS, ElementRef
]);