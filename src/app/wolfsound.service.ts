import { Injectable } from '@angular/core';
import {  Jsonp , URLSearchParams , Headers, Http , Response , RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import {Observable} from 'rxjs/Rx';
import { Wolf} from './wolf';

@Injectable()
export class WolfsoundService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private wolfUrl = 'http://localhost:8081/api/bears';  // URL to web api https://secret-sea-39644.herokuapp.com/api/bears

	constructor(
		private http: Http
		// private jsonp: Jsonp
		) { }
	// constructor(private jsonp: Jsonp) { }
	ngOnInit() {
	}
	getBears() {
		// return Observable<Check[]>
		return this.http.get(this.wolfUrl)
		.map(response => <Wolf[]> response.json())
		// .catch(this.handleError)
		;
	}  

	getAllBears() : Observable<Wolf[]>{
		// ...using get request
		return this.http.get(this.wolfUrl)
		// ...and calling .json() on the response to return data
		.map((res:Response) => res.json())
		//...errors if any
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));

	}

	// // Add a new comment
	addWolf (body: Object): Observable<Wolf[]> {
		let bodyString = JSON.stringify(body); // Stringify payload
		let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
		let options = new RequestOptions({ headers: headers }); // Create a request option

		return this.http.post(this.wolfUrl , body, options) // ...using post request
		.map((res:Response) => res.json()) // ...and calling .json() on the response to return data
		.catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
	}

	findwolfById(id: string) : Observable<Wolf> {
		// End point for list of pets:
		// http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas
		const endPoint = 'get'
		// URLSearchParams makes it easier to set query parameters and construct URL
		// rather than manually concatinatng
		let params = new URLSearchParams();
		// params.set('key', '555f8155d42d5c9be4705beaf4cce089');
		params.set('id', id);
		// params.set('format', 'json');
		// params.set('callback', 'JSONP_CALLBACK');
		console.log(id);
		// Return response
		return this.http
		.get(this.wolfUrl+'/'+id)
		.map((res: Response) => res.json());
	}

	deleteWolf(id: string) : Observable<Wolf> {
		// End point for list of pets:
		// http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas
		const endPoint = 'get'
		// URLSearchParams makes it easier to set query parameters and construct URL
		// rather than manually concatinatng
		let params = new URLSearchParams();
		// params.set('key', '555f8155d42d5c9be4705beaf4cce089');
		params.set('id', id);
		// params.set('format', 'json');
		// params.set('callback', 'JSONP_CALLBACK');
		console.log(id);
		// Return response
		return this.http
		.delete(this.wolfUrl+'/'+id)
		.map((res: Response) => res.json());
	}

	updateWolf(id: string, body: Object) : Observable<Wolf> {
		// End point for list of pets:
		// http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas
		let bodyString = JSON.stringify(body); // Stringify payload
		let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
		let options = new RequestOptions({ headers: headers }); // Create a request option
		const endPoint = 'get'
		// URLSearchParams makes it easier to set query parameters and construct URL
		// rather than manually concatinatng
		let params = new URLSearchParams();
		// params.set('key', '555f8155d42d5c9be4705beaf4cce089');
		params.set('id', id);
		// params.set('format', 'json');
		// params.set('callback', 'JSONP_CALLBACK');
		console.log(id);
		// Return response
		return this.http
		.put(this.wolfUrl+'/'+id , body, options) // ...using post request
		.map((res:Response) => res.json()) // ...and calling .json() on the response to return data
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}


}
