import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'navbar',
    templateUrl: './dev/nav/nav.template.html',
	directives: [ROUTER_DIRECTIVES],
	styleUrls: ["./src/css/nav.css"]
})
export class NavComponent {
}
