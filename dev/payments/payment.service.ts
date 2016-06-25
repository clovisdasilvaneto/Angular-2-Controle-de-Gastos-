import {Injectable} from "angular2/core";
import { Headers, Http } from 'angular2/http';
import {Payment} from "./payment";
import 'rxjs/add/operator/toPromise';

@Injectable()

export class PaymentService {
	constructor(private http: Http) { }

	get(): Promise<Payment[]> {
	   return this.http.get('http://localhost:8000/api/payments/')
		  .toPromise()
		  .then(response => response.json())
		  .catch(this.handleError);
	 }

	getById(payment: Payment): Promise<Payment[]> {
	   return this.http.get('http://localhost:8000/api/payments/'+payment._id)
		  .toPromise()
		  .then(response => response.json())
		  .catch(this.handleError);
	}

	save(payment: Payment): Promise<Payment>{
		if(payment._id){
			return this.put(payment);
		}
		return this.post(payment);
	}

	post(payment: Payment): Promise<Payment>{
	    let headers = new Headers();
	    let url = 'http://localhost:8000/api/payments/';

		headers.append('Content-Type', 'application/json');
	    return this.http.post(url, JSON.stringify(payment), {headers: headers})
				.toPromise()
				.then(res => res.json())
				.catch(this.handleError);
	}

	put(payment: Payment): Promise<Payment>{
	    let headers = new Headers();
	    let url = 'http://localhost:8000/api/payments/'+payment._id;

		headers.append('Content-Type', 'application/json');
	    return this.http.put(url, JSON.stringify(payment), {headers: headers})
				.toPromise()
				.then(res => res.json())
				.catch(this.handleError);
	}

	remove(payment: Payment): Promise<Payment>{
	    let headers = new Headers();
	    let url = 'http://localhost:8000/api/payments/'+payment._id;

		headers.append('Content-Type', 'application/json');
	    return this.http.delete(url, {headers: headers})
				.toPromise()
				.then(res => res.json())
				.catch(this.handleError);
	}

	bulkRemove(payments): Promise<Payment>{
	    let headers = new Headers();
	    let url = 'http://localhost:8000/api/payments/bulkRemove/';

		headers.append('Content-Type', 'application/json');
	    return this.http.post(url, JSON.stringify(payments), {headers: headers})
				.toPromise()
				.then(res => res.json())
				.catch(this.handleError);
	}

	private handleError(error: any) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}
