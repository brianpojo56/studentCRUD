import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    (this as any).studentForm = this.createStudentForm();
  }

  createStudentForm(): FormGroup {
    return this.fb.group({
      Name: [''],
      ChargerID: [''],
      Anumber: [''],
      Gender: [''],
      Level: [''],
      Courses: this.fb.array([this.createCourseForm()])
    });
  }

  createCourseForm(): FormGroup {
    return this.fb.group({
      Name: '',
      CrnNo: '',
      Lecturer: '',
      Code: ''
    })
  }

  addCourse(): void {
    (this as any).courses = (this as any).studentForm.get('Courses') as FormArray;
    (this as any).courses.push(this.createCourseForm());
  }

  ngOnInit() {
  }

  onSubmit() {
    // TODO:
    console.warn((this as any).studentForm.value);
  }
}
