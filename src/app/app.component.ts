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

  // receive input from eventEmitter from courseCardClicked
  onCourseSelected(course: Course) {
    console.log("appComponent: onCardClicked()", course)
  }

}
