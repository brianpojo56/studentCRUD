import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { University } from './university';
import { Student } from './student';
import { UNIVERSITY } from './test-data';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents(): Observable<Student[]> {
    return of(UNIVERSITY.StudentList);
  }
}
