import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

// Decorator
@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit {

  // programmatic reference of the template
  @Input({ required: true })
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  // reference to course-image native dom element, scope of contentChild restrict only to ng-content part of it, cannot see anything else in parent temp
  @ContentChild('container')
  container;


  @ContentChild(CourseImageComponent, { read: ElementRef })
  image: ElementRef;

  constructor() {
  }

  ngAfterViewInit() {
    console.log(this.image)
    console.log(this.container)
  }

  ngOnInit() {
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    // console.log("cardComponent: onCourseViewed()")

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
