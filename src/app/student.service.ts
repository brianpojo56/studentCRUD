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
  students: Student[];
  private studentUrl = 'https://my-json-server.typicode.com/brianpojo56/students/StudentList';

  constructor( private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    if (this.students) {
      return of(this.students);
    }
    else {
    return this.http.get<Student[]>(this.studentUrl)
      .pipe(
        tap(students => {
          console.log('fetched students');
          this.students = students;
        }),
        catchError(this.handleError('getStudents', []))
      );
    }
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentUrl, student, httpOptions)
      .pipe(
        tap((student: Student) => {
          console.log(`added student w/ id=${student.id}`);
      }),
        catchError(this.handleError<Student>('addStudent'))
      );
  }

  deleteStudent(student: Student): Observable<Student> {
    const id = student.id;
    const url = `${this.studentUrl}/${id}`;

    return this.http.delete<Student>(url, httpOptions)
      .pipe(
        tap(_ => {
          console.log(`deleted student id=${id}`);
          this.students = this.students.filter(s => s !== student);
        })
      );
  }

  updateStudent(student: Student): Observable<any> {
    const id = student.id;
    const url = `${this.studentUrl}/${id}`;

    return this.http.put(url, student, httpOptions)
      .pipe(
        tap(_ => {
          console.log(`updated student id=${id}`);
            for (let i = 0; i < this.students.length; i++) {
              if(this.students[i].id === student.id) {
                this.students[i] = student;
              }
            }
          }),
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
