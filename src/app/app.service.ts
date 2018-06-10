import { Injectable } from '@angular/core';
// rxjs
import {Observable} from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class AppService {

  private _baseUrl = window.location.origin;

  constructor(private http: HttpClient) { }

  sendMaintEmail(data):Observable<any>{
    console.log('in servcie',data)
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this._baseUrl + '/api/maintemail',data,httpOptions).catch(this.handleErrorObservable);
  }

  handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

}
