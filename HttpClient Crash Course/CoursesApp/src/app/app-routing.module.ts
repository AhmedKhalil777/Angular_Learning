import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseUpdateComponent } from './course-update/course-update.component';
import { CourseDetailsComponent } from './course-details/course-details.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-course', component: CourseCreateComponent },
  { path: 'courses-list', component: CourseListComponent },
  { path: 'courses-update/:id', component: CourseUpdateComponent },
  { path: 'courses-details/:id', component: CourseDetailsComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
