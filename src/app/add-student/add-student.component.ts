import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  students: Student[];

  constructor(private fb: FormBuilder, public studentService: StudentService) {
    (this as any).studentForm = this.createStudentForm();
  }

  createStudentForm(): FormGroup {
    return this.fb.group({
      Name: ['', Validators.required],
      ChargerID: ['', Validators.required],
      Anumber: ['', Validators.required],
      Gender: ['', Validators.required],
      Level: ['', Validators.required],
      Courses: this.fb.array([this.createCourseForm()])
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

  addStudent(student: Student): void {
    this.studentService.addStudent(student as Student)
      .subscribe(student => {
        this.students.push(student);
        (this as any).studentForm = this.createStudentForm();
      })
  }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents()
      .subscribe(students => this.students = students);
  }

  onSubmit() {
    this.addStudent((this as any).studentForm.value);
  }
  
}
