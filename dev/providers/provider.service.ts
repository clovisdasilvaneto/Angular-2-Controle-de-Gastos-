import {Injectable} from "angular2/core";
import { Headers, Http } from 'angular2/http';
import {Provider} from "./provider";
import 'rxjs/add/operator/toPromise';

@Injectable()

export class ProviderService {
	constructor(private http: Http) { }

	get(): Promise<Provider[]> {
	   return this.http.get('http://localhost:8000/api/providers/')
		  .toPromise()
		  .then(response => response.json())
		  .catch(this.handleError);
	 }

	getById(provider: Provider): Promise<Provider[]> {
	   return this.http.get('http://localhost:8000/api/providers/'+provider._id)
		  .toPromise()
		  .then(response => response.json())
		  .catch(this.handleError);
	}

	save(provider: Provider): Promise<Provider>{
		if(provider._id){
			return this.put(provider);
		}
		return this.post(provider);
	}

	post(provider: Provider): Promise<Provider>{
	    let headers = new Headers();
	    let url = 'http://localhost:8000/api/providers/';

		headers.append('Content-Type', 'application/json');
	    return this.http.post(url, JSON.stringify(provider), {headers: headers})
				.toPromise()
				.then(res => res.json())
				.catch(this.handleError);
	}

	put(provider: Provider): Promise<Provider>{
	    let headers = new Headers();
	    let url = 'http://localhost:8000/api/providers/'+provider._id;

		headers.append('Content-Type', 'application/json');
	    return this.http.put(url, JSON.stringify(provider), {headers: headers})
				.toPromise()
				.then(res => res.json())
				.catch(this.handleError);
	}

	remove(provider: Provider): Promise<Provider>{
	    let headers = new Headers();
	    let url = 'http://localhost:8000/api/providers/'+provider._id;

		headers.append('Content-Type', 'application/json');
	    return this.http.delete(url, {headers: headers})
				.toPromise()
				.then(res => res.json())
				.catch(this.handleError);
	}

	bulkRemove(providers): Promise<Provider>{
	    let headers = new Headers();
	    let url = 'http://localhost:8000/api/providers/bulkRemove/';

		headers.append('Content-Type', 'application/json');
	    return this.http.post(url, JSON.stringify(providers), {headers: headers})
				.toPromise()
				.then(res => res.json())
				.catch(this.handleError);
	}

	private handleError(error: any) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}
