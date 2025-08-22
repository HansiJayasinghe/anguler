import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginDetails } from "../model/login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    public BASE_URL = 'http://10.70.4.78:8080/doxpro/api/';
  private headers;

  constructor(private _http: HttpClient) {
    
    this.headers = new HttpHeaders();
  }

  attemptAuth(loginDetails: LoginDetails): Observable<LoginDetails>{
    return this._http.post<LoginDetails>(this.BASE_URL+"user/signin/",loginDetails);
  }

}