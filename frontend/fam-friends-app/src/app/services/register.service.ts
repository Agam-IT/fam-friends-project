import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISignup } from '../models/signup';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  readonly demoUrl = 'https://whispering-sands-56141.herokuapp.com/signup';
  constructor(private _http: HttpClient) {}

  PostUser(user: ISignup): Observable<ISignup> {
    return this._http.post<ISignup>(this.demoUrl, user);
  }
}
