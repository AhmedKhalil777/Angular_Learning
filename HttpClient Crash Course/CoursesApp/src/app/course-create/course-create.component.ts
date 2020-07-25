import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {

  constructor(
    public restApi:RestApiService,
    public router : Router
    ) {}
  
  @Input() courseDetails ={name:'' , drId :'' , drName :''};
  ngOnInit() {
  }

  addCourse(dataCourse){
    this.restApi.Create_Course(dataCourse).subscribe((data:{})=> {this.router.navigate(['courses-list'])});
  }

}
