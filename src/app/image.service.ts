import { Injectable } from '@angular/core';
import {  Jsonp , URLSearchParams , Headers, Http , Response , RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import {Observable} from 'rxjs/Rx';
import { Image} from './image';

@Injectable()
export class ImageService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private imageUrl = 'https://fileuploader2702.herokuapp.com/images';  // URL to web api https://secret-sea-39644.herokuapp.com/api/bears

	constructor(
		private http: Http
		// private jsonp: Jsonp
		) { }
	// constructor(private jsonp: Jsonp) { }
	ngOnInit() {
	}
 

	getAllImages() : Observable<Image[]>{
		// ...using get request
		return this.http.get(this.imageUrl)
		// ...and calling .json() on the response to return data
		.map((res:Response) => res.json())

		//...errors if any
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
		



	}
}

