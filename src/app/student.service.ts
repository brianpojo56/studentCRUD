import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { University } from './university';
import { Student } from './student';

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

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentUrl, student, httpOptions)
      .pipe(
        tap((student: Student) => console.log(`added student w/ id=${student.id}`)),
        catchError(this.handleError<Student>('addStudent'))
      );
  }

  deleteStudent(student: Student | number): Observable<Student> {
    const id = typeof student === 'number' ? student : student.id;
    const url = `${this.studentUrl}/${id}`;

    return this.http.delete<Student>(url, httpOptions)
      .pipe(
        tap(_ => console.log(`deleted student id=${id}`))
      );
  }

  updateStudent(student: Student): Observable<any> {
    return this.http.put(this.studentUrl, student, httpOptions)
      .pipe(
        tap(_ => console.log(`updated student id=${student.id}`)),
        catchError(this.handleError<any>('updateStudent'))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
