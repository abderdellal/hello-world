import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'

import { IPerson } from './IPerson'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

@Injectable()
export class TestServiceService {

  private _url = "/assets/data/persons.json"

  constructor(private http : HttpClient) { }

  getTestStrings() : Observable<IPerson[]>
  {
    return this.http.get<IPerson[]>(this._url).catch(this.OnHttpError);
  }

  OnHttpError(error : HttpErrorResponse)
  {
    return Observable.throw(error.message);
  }
}
