import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http"
import { CreateCourse } from './create-course';
import {observable,throwError, Observable} from 'rxjs'
import {retry,catchError} from 'rxjs/Operators'
import { format } from 'url';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiUrl = "http://localhost:7002/api/v1/";

    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }  
  constructor(private http : HttpClient) { }

  Create_Course(course):Observable<CreateCourse>{
    return this.http.post<CreateCourse>(this.apiUrl+'SuperCourse/CreateCourse', JSON.stringify(course), this.httpOptions).
    pipe(retry(1), catchError(this.handleError))
  }

    // Error handling 
    handleError(error) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
   }
}
