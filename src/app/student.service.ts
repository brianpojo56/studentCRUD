import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { University } from './university';
import { Student } from './student';
import { UNIVERSITY } from './test-data';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  private studentUrl = 'https://my-json-server.typicode.com/brianpojo56/students/StudentList';

  constructor( private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl)
      .pipe(
        tap(students => console.log('fetched students')),
        catchError(this.handleError('getStudents', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
