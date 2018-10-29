import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { UNIVERSITY } from '../test-data';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {
  students = UNIVERSITY.StudentList;
  selectedStudent: Student;

  constructor() { }

  ngOnInit() {
  }

  onSelect(student: Student): void {
    this.selectedStudent= student;
  }
}
