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

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    console.log("cardComponent: onCourseViewed()")

    this.courseEmitter.emit(this.course) // custom event -> emit to pass selected course as payload
  }

  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return 'beginner'
    }

  }

  cardStyles() {
    return {
      'text-decoration': 'underline',
      'background-image': 'url(' + this.course.iconUrl + ')'
    }
  }

}
