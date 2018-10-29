import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShowStudentComponent } from './show-student/show-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { CourseComponent } from './course/course.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

const appRoutes: Routes = [
  { path: 'show-student', component: ShowStudentComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'update-student', component: UpdateStudentComponent },
  { path: 'delete-student', component: DeleteStudentComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    ShowStudentComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    DeleteStudentComponent,
    CourseComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
