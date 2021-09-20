import { Injectable } from '@angular/core';

import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Student } from './student';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  // Define API
  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch students list
  getStudents(): Observable<Student> {
    return this.http.get<Student>(this.apiURL + '/students')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch student
  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(this.apiURL + '/students/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create student
  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiURL + '/students', JSON.stringify(student), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API put() method => Update student
  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(this.apiURL + '/students/' + id, JSON.stringify(student), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete employee
  deleteStudent(id: number){
    return this.http.delete<Student>(this.apiURL + '/students/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error: any){
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
