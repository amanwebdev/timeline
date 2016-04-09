/// <reference path="../../../typings/tsd.d.ts" />

import { bootstrap }    		from 'angular2/platform/browser';
import { ROUTER_PROVIDERS } 	from 'angular2/router';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import { ElementRef } 			from 'angular2/core';
import { WipService }      		from './services/wip.service';
import { UserService }      	from './services/user.service';
import { AppComponent } 		from './components/app.component';
import {provide} from 'angular2/core';
import {Modal, ModalConfig} from 'angular2-modal/angular2-modal';
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS, WipService, UserService, HTTP_PROVIDERS, ElementRef,
    provide(ModalConfig, { useValue: new ModalConfig('lg', true, 81) }),
    ELEMENT_PROBE_PROVIDERS // remove in production
]).catch(err => console.error(err));
