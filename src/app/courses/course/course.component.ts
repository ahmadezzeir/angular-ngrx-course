
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {Course} from "../model/course";
import {CoursesService} from "../services/courses.service";
import {debounceTime, distinctUntilChanged, startWith, tap, delay} from 'rxjs/operators';
import {merge, fromEvent} from "rxjs";
import {LessonsDataSource} from "../services/lessons.datasource";
import {AppState} from '../../reducers';
import {select, Store} from '@ngrx/store';
import {PageQuery} from '../course.actions';
import {Observable} from 'rxjs/Observable';
import {selectLessonsLoading} from '../course.selectors';


@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, AfterViewInit {

    course:Course;

    dataSource: LessonsDataSource;

    displayedColumns = ["seqNo", "description", "duration"];

    @ViewChild(MatPaginator) paginator: MatPaginator;

<<<<<<< HEAD
=======
    loading$ : Observable<boolean>;

>>>>>>> master

    constructor(private route: ActivatedRoute, private store: Store<AppState>) {

    }

    ngOnInit() {

        this.course = this.route.snapshot.data["course"];

        this.loading$ = this.store.pipe(select(selectLessonsLoading));

        this.dataSource = new LessonsDataSource(this.store);

<<<<<<< HEAD
        this.dataSource.loadLessons(this.course.id, 0, 3);
=======
        const initialPage: PageQuery = {
          pageIndex: 0,
          pageSize: 3
        };

        this.dataSource.loadLessons(this.course.id, initialPage);
>>>>>>> master

    }

    ngAfterViewInit() {

        this.paginator.page
<<<<<<< HEAD
        .pipe(
=======
          .pipe(
>>>>>>> master
            tap(() => this.loadLessonsPage())
          )
          .subscribe();


    }

    loadLessonsPage() {
<<<<<<< HEAD
        this.dataSource.loadLessons(
            this.course.id,
            this.paginator.pageIndex,
            this.paginator.pageSize);
=======

      const newPage: PageQuery = {
        pageIndex: this.paginator.pageIndex,
        pageSize: this.paginator.pageSize
      };

      this.dataSource.loadLessons(this.course.id, newPage);

>>>>>>> master
    }


}
