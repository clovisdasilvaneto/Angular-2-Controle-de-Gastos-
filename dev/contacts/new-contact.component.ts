import {Component} from 'angular2/core';
import {ContactService} from './contact.service';
import {Router} from 'angular2/router';
import {Contact} from './contact';
import {RouteParams} from 'angular2/router';
import {OnInit} from 'angular2/core';

@Component({
    template: `
		Create a new contact
		<form #myForm="ngForm" (ngSubmit)="addContact(gender)">
			<div>
				<label>Name: </label>
				<input type="text" [(ngModel)]="newContact.name" #name="ngForm" ngControl="name" required />
			</div>
			<div>
				<label>Gender: </label>
				<input type="text" [(ngModel)]="newContact.gender" #gender="ngForm" ngControl="gender" required />
				<span *ngIf="!gender.valid && gender.dirty">Gender is required</span>
			</div>
			<div>
				<label>Profession: </label>
				<input type="text" [(ngModel)]="newContact.profession" #profession="ngForm" ngControl="profession" required />
			</div>
			<button [disabled]="!myForm.form.valid">Add Contact</button>
		</form>
    `,
	styles: [`
		.ng-dirty.ng-invalid {
			border:solid 1px red;
			outline:none;
			box-shadow: inset 0 0 3px red;
		}

		.ng-dirty.ng-valid {
			border:solid 1px green;
			outline:none;
			box-shadow: inset 0 0 3px green;
		}

		button[disabled] {
			background:#ccc;
			color: #000;
			border: solid 1px #ccc;
		}

		button {
			background: green;
			color: #fff;
			padding:10px;
			border-radius:4px;
			border: solid 1px green;
		}
	`],
	providers: [ContactService]
})

export class NewContactComponent implements OnInit {
	newContact: Contact;

	constructor(private _contactService: ContactService, private _router: Router, private _routeParams: RouteParams){}

	addContact(){
		this._contactService.insertContact(this.newContact);
		this._router.navigate(['Contacts'])
	}

	ngOnInit():any {
		this.newContact = {name: this._routeParams.get('name'), profession: '', gender: ''};
	}
}
