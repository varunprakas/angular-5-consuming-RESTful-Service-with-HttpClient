import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse } from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import {ISurvey} from './isurvey'

@Injectable()
export class SurveyService {
  error;
  constructor(private _http:HttpClient){
    
  }
  
  getSurveyQuestion(): Observable<ISurvey[]>{
    return this._http
      .get<ISurvey[]>('./assets/data.json')
      .do(data =>console.log('All : ' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  
  private handleError(error: HttpErrorResponse)
  {
    //debugger;
    console.error(error);
    let errorMessage = '';
    if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
    } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
}