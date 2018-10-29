import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Student } from './student';
import { UNIVERSITY } from './test-data';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents(): Observable<Student[]> {
    this.messageService.add('StudentService: fetched students');
    return of(UNIVERSITY);
  }
}
