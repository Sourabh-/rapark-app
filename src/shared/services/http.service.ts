import { Injectable, EventEmitter } from '@angular/core';
import { Response, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

function extractData(res: Response): any {
  const body = res.json();
  return body || {};
}

function handleError(res: Response) {
  const error = res.json();
  const errorMessage = error.message ? error.message :
    res.status ? `${res.status} - ${res.statusText}` : 'Server error';

  return Observable.throw(errorMessage);
}

@Injectable()
export class HttpService {
	private url: string = 'http://localhost:5000';
	private API_GET_SETTINGS = '/rapark/settings/v1/get';
	private API_SET_SETTINGS = '/rapark/settings/v1/create';
	private API_GEN_OTP = '/rapark/otp/v1/create';
	private API_GET_AMOUNT = '/rapark/otp/v1/payment';

	constructor(
		private http: Http
	) {}

	getSettings(type) {
		return this.http
	      .get(`${this.url + this.API_GET_SETTINGS}/${type}`)
	      .map(extractData)
	      .catch((err: Response) => {
	      	return handleError(err);
	      });
	}

	setSettings(settings, type) {
		return this.http
	      .post(`${this.url + this.API_SET_SETTINGS}/${type}`, settings)
	      .map(extractData)
	      .catch((err: Response) => {
	      	return handleError(err);
	      });
	}

	generateOTP(type, phoneNumber, regNo?) {
		let body = { phoneNumber, type };
		if(regNo) body['regNo'] = regNo;

		return this.http
	      .post(`${this.url + this.API_GEN_OTP}`, body)
	      .map(extractData)
	      .catch((err: Response) => {
	      	return handleError(err);
	      });
	}

	getAmount(otp) {
		return this.http
	      .get(`${this.url + this.API_GET_AMOUNT}/${otp}`)
	      .map(extractData)
	      .catch((err: Response) => {
	      	return handleError(err);
	      });	
	}
}