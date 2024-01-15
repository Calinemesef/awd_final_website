import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CourseDetailsService} from "../../services/course-details.service";


@Component({
  selector: 'app-coursepage',
  templateUrl: './coursepage.component.html',
  styleUrls: ['./coursepage.component.css']
})
export class CoursepageComponent implements OnInit {

  constructor(private param: ActivatedRoute, private service: CourseDetailsService) { }

  getCourseId: any;
  courseData: any;

  ngOnInit(): void {
    this.getCourseId = this.param.snapshot.paramMap.get('id');
    if(this.getCourseId){
      this.courseData = this.service.courseDetails.filter((value)=>{
        return value.id == this.getCourseId;
      })
    }
  }

}
