import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { environment } from "./../environments/environment";

@Injectable()
export class AppService {
  //private _baseUrl = window.location.origin;
  private _baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  sendMaintEmail(data): Observable<any> {
    console.log("in servcie", data);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.http
      .post(this._baseUrl + "/api/maintemail", data, httpOptions)
      .pipe(catchError(this.handleErrorObservable));
  }

  sendContacEmail(data): Observable<any> {
    console.log("in servcie", data);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.http
      .post(this._baseUrl + "/api/contactemail", data, httpOptions)
      .pipe(catchError(this.handleErrorObservable));
  }

  sendNoticeEmail(data): Observable<any> {
    console.log("in servcie", data);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.http
      .post(this._baseUrl + "/api/noticeemail", data, httpOptions)
      .pipe(catchError(this.handleErrorObservable));
  }

  sendPayment(data): Observable<any> {
    console.log("in servcie", data);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.http
      .post(this._baseUrl + "/api/sendPayment", data, httpOptions)
      .pipe(catchError(this.handleErrorObservable));
  }

  sendUserPaymentEmail(data): Observable<any> {
    console.log("in servcie", data);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.http
      .post(this._baseUrl + "/api/paymentEmail", data, httpOptions)
      .pipe(catchError(this.handleErrorObservable));
  }

  sendAdminPaymentEmail(data): Observable<any> {
    console.log("in servcie", data);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.http
      .post(this._baseUrl + "/api/paymentConfirmation", data, httpOptions)
      .pipe(catchError(this.handleErrorObservable));
  }

  handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return throwError(error.message || error);
  }
}
