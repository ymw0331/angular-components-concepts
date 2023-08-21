import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  // courses array
  courses = COURSES;

  // ViewChild decorator is a template query mechanism, use it to get reference any element in the template 
  @ViewChild('cardRef1', { read: ElementRef })
  card1: CourseCardComponent;

  @ViewChild('courseImage')
  courseImage: CourseCardComponent;

  // query by element or native dom element or component instance
  @ViewChild(CourseImageComponent)
  image: CourseImageComponent;
  // used to query plain dom element, or component

  constructor() {

  }

  // ng method to call after all child are filled in, called by ng (lifecycle hook)
  ngAfterViewInit(): void {
    // console.log("ngafterViewInit(): AppComponent", this.card1)
    console.log('courseImage', this.image)


    // this.courses[0].description = 'test'
  }

  // receive input from eventEmitter from courseCardClicked
  onCourseSelected(course: Course) {
    // console.log("containerDiv", this.containerDiv)
    // console.log("card1", this.card1)
    console.log('courseImage', this.courseImage)
  }

}
