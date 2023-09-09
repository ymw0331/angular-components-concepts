import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChild } from '@angular/core';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

// Decorator
@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {

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


  // When to use: this is needed if using content projection (ngContent), if need programmatic reference to projected content
  // ViewChild : useful when building component, need programmatic reference  
  @ContentChildren(CourseImageComponent, { read: ElementRef })
  images: QueryList<CourseImageComponent>;

  constructor() {
  }

  ngAfterViewInit() {
  }

  ngAfterContentInit() {
    console.log(this.images)

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
