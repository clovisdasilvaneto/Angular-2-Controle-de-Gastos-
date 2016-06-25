import {Injectable} from "angular2/core";
import { Headers, Http } from 'angular2/http';
import {CONTACTS} from "./mock-contact";
import {Contact} from "./contact";
import 'rxjs/add/operator/toPromise';

@Injectable()

export class ContactService {
	constructor(private http: Http) { }

	getContacts(): Promise<Contact[]> {
	   return this.http.get('https://meus-gastos-api.herokuapp.com/api/salons/')
		  .toPromise()
		  .then(response => response.json())
		  .catch(this.handleError);
	 }

	insertContact(contact: Contact){
		Promise.resolve(CONTACTS).then((contacts: Contact[]) => contacts.push(contact));
	}

	private handleError(error: any) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}
