import { Component } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // courses array
  courses = COURSES;
  title = COURSES[0].description;
  price = 9.99;
  rate = 0.67;
  course = COURSES[0]

  startDate = new Date(2000, 0, 1)

  // receive input from eventEmitter from courseCardClicked
  onCourseSelected(course: Course) {
    console.log("appComponent: onCardClicked()", course)
  }

}
