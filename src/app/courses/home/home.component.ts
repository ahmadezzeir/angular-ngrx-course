<<<<<<< HEAD
import { Component, OnInit } from "@angular/core";
import { Course } from "../model/course";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CoursesService } from "../services/courses.service";
import { Store } from "@ngrx/store";
import { AppState } from "../../reducers/index";

=======
import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {Observable} from "rxjs";
import {filter, map, tap, withLatestFrom} from "rxjs/operators";
import {CoursesService} from "../services/courses.service";
import {AppState} from '../../reducers';
import {select, Store} from '@ngrx/store';
import {selectAdvancedCourses, selectAllCourses, selectBeginnerCourses, selectPromoTotal} from '../course.selectors';
import {AllCoursesRequested} from '../course.actions';
>>>>>>> master
@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  promoTotal$: Observable<number>;

  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    private store: Store<AppState>
  ) {}

<<<<<<< HEAD
  ngOnInit() {
    const courses$ = this.coursesService.findAllCourses();
=======
    constructor(private store: Store<AppState>) {
>>>>>>> master

    this.beginnerCourses$ = courses$.pipe(
      map(courses => courses.filter(course => course.category === "BEGINNER"))
    );

<<<<<<< HEAD
    this.advancedCourses$ = courses$.pipe(
      map(courses => courses.filter(course => course.category === "ADVANCED"))
    );
=======
    ngOnInit() {

        this.store.dispatch(new AllCoursesRequested());

        this.beginnerCourses$ = this.store.pipe(select(selectBeginnerCourses));

        this.advancedCourses$ = this.store.pipe(select(selectAdvancedCourses));

        this.promoTotal$ = this.store.pipe(select(selectPromoTotal));

    }
>>>>>>> master

    this.promoTotal$ = courses$.pipe(
      map(courses => courses.filter(course => course.promo).length)
    );
  }
}
