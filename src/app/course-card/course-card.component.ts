import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';

// Decorator
@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {


  @Input({ required: true })
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();



  constructor() {

  }

  ngOnInit() {

  }

  onCourseViewed() {
    console.log("cardComponent: onCourseViewed()")

    this.courseEmitter.emit(this.course) // custom event -> emit to pass selected course as payload
  }

}
