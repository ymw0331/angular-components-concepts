import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  // courses array
  courses = COURSES;

  // ViewChild and ViewChildren are local template query mechanism

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards: QueryList<ElementRef> //specify type of element to be extracted

  ngAfterViewInit() {
    // this.cards.changes.subscribe(
    //   cards => console.log(cards) //instances of query list
    // )
    console.log(this.cards)
  }

  // receive input from eventEmitter from courseCardClicked
  onCourseSelected(course: Course) {
    console.log("appComponent: onCardClicked()", course)
  }

  onCoursesEdited() {
    this.courses.push(
      {
        id: 1,
        description: "Angular Core Deep Dive",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        lessonsCount: 10
      }
    )
  }
}
