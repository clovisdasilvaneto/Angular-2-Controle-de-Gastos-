import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {Contact} from './contact';

@Component({
    selector: 'contact',
    template: `
		<p [class.clicked]="contact" *ngIf="contact">Hello World! My name is {{contact.name}}</p>

		<ul *ngIf="contact">
			<li>Name: {{contact.name}}</li>
			<li>Gender: {{contact.gender}}</li>
			<li>Profession: {{contact.profession}}</li>
			<li><button (click)="onCreateNew()">Criar novo registro à partir deste contato</button></li>
		</ul>
    `,
	inputs:["contact"]
})
export class ContactComponent {
	public contact: Contact = null;

	constructor(private _router: Router){}

	onCreateNew(){
		// this._router.navigate(['NewContact', {name: this.contact.name}])
		this._router.navigate(['NewContactFromContact', {name: this.contact.name}])
	}
}
