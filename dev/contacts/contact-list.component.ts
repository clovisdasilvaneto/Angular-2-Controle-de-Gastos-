import {Component} from 'angular2/core';
import {ContactComponent} from './contact.component';
import {ContactService} from './contact.service';
import {Contact} from './contact';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'contact-list',
    templateUrl: './dev/contacts/contact-list.template.html',
	providers: [ContactService],
	directives:[ContactComponent]
})

export class ContactListComponent {
	public selectedContact: Contact = null;
	public contacts: Contact[] = null;
	constructor(private _contactService: ContactService){}

	onSelect(contact){
		this.selectedContact = contact;
	}

	getContacts(){
		this._contactService.getContacts().then((contacts: Contact[]) => {
			console.log(contacts.length)
			this.contacts = contacts
		});
	}

	ngOnInit():any {
		return this.getContacts();
	}
}
