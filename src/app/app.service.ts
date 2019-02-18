import { Injectable } from '@angular/core';
// rxjs
// import {Observable} from 'rxjs/Observable';
import {Observable} from 'rxjs/Observable';
import {throwError} from 'rxjs';
import { Resolve } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class AppService {

  private _baseUrl = window.location.origin;

  constructor(private http: HttpClient) { }

  sendMaintEmail(data): Observable<any> {
    console.log('in servcie', data);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this._baseUrl + '/api/maintemail', data, httpOptions).catch(this.handleErrorObservable);
  }


  sendContacEmail(data): Observable<any> {
    console.log('in servcie', data);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this._baseUrl + '/api/contactemail', data, httpOptions).catch(this.handleErrorObservable);
  }

  sendNoticeEmail(data): Observable<any> {
    console.log('in servcie', data);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this._baseUrl + '/api/noticeemail', data, httpOptions).catch(this.handleErrorObservable);
  }

  sendPayment(data): Observable<any> {
    console.log('in servcie', data);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this._baseUrl + '/api/sendPayment', data, httpOptions).catch(this.handleErrorObservable);
  }

  sendPaymentEmail(data): Observable<any> {
    console.log('in servcie', data);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this._baseUrl + '/api/paymentemail', data, httpOptions).catch(this.handleErrorObservable);
  }
  sendAdminPaymentEmail(data): Observable<any> {
    console.log('in servcie', data);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this._baseUrl + '/api/paymentConfirmation', data, httpOptions).catch(this.handleErrorObservable);
  }
  handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return throwError(error.message || error);
  }

}
