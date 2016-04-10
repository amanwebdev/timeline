/// <reference path="../../../../typings/tsd.d.ts" />

import {Component, Injector, provide} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {TaskComponent, TaskListComponent,
    HistoryComponent, LogInFormComponent,
    SignUpFormComponent, ThemeChooser}
from './components';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import {LoggedInRouterOutlet} from '../LoggedInOutlet';
import {Modal, ModalConfig, ICustomModal} from 'angular2-modal/angular2-modal';
import {UserSettings} from '../models/user-settings';

@Component({
    selector: 'time-sheet',
    templateUrl: 'app/templates/app.component.html',
    directives: [TaskComponent, TaskListComponent, DROPDOWN_DIRECTIVES, ROUTER_DIRECTIVES],
    providers: [Modal]
})
@RouteConfig([
    { path: '/track', name: 'Track', component: TaskComponent, useAsDefault: true },
    { path: '/wip', name: 'WIP', component: TaskListComponent },
    { path: '/history', name: 'History', component: HistoryComponent }
])
export class AppComponent {
    constructor(private modal: Modal) {

    }
    public openSettings(): void {

        let resolvedBindings = Injector.resolve([provide(ICustomModal, { useValue: new UserSettings() })]),
            dialog = this.modal.open(
                <any>ThemeChooser,
                resolvedBindings,
                new ModalConfig('sm', true, 27)
            );

    }
}
