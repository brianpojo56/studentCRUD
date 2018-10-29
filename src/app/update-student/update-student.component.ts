import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  students: Student[];
  selectedStudent: Student;

  constructor(private fb: FormBuilder, private studentService: StudentService, private location: Location) {
    (this as any).studentForm = this.createStudentForm();
  }

  createStudentForm(): FormGroup {
    return this.fb.group({
      Name: ['', Validators.required],
      ChargerID: ['', Validators.required],
      Anumber: ['', Validators.required],
      Gender: ['', Validators.required],
      Level: ['', Validators.required],
      Courses: this.fb.array([])
    });
  }

  createCourseForm(): FormGroup {
    return this.fb.group({
      Name: ['', Validators.required],
      CrnNo: ['', Validators.required],
      Lecturer: ['', Validators.required],
      Code: ['', Validators.required]
    })
  }

  addCourse(): void {
    (this as any).courses = (this as any).studentForm.get('Courses') as FormArray;
    (this as any).courses.push(this.createCourseForm());
  }

  removeCourse(i: number): void {
    (this as any).courses = (this as any).studentForm.get('Courses') as FormArray;
    (this as any).courses.removeAt(i);
  }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents()
      .subscribe(students => this.students = students);
  }

  updateStudent(student: Student): void {
    student.id = this.selectedStudent.id;
    this.students = this.students.filter(s => s !== this.selectedStudent);
    this.students.push(student);
    this.studentService.updateStudent(student).subscribe(_ => {
      this.selectedStudent = null;
      (this as any).studentForm = this.createStudentForm();
    });
  }

  onSelect(student: Student): void {
    this.selectedStudent = student;
    for (let course of student.Courses) {
      this.addCourse();
    }
    (this as any).studentForm.patchValue(student);
  }

  onSubmit() {
    this.updateStudent((this as any).studentForm.value as Student);
  }

  goBack(): void {
    this.location.back()
  }
}
