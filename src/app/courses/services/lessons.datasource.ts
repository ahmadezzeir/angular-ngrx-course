


import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Observable, BehaviorSubject, of} from "rxjs";
import {Lesson} from "../model/lesson";
import {CoursesService} from "./courses.service";
<<<<<<< HEAD
import {catchError, finalize} from "rxjs/operators";
=======
import {catchError, finalize, tap} from 'rxjs/operators';
import {AppState} from '../../reducers';
import {select, Store} from '@ngrx/store';
import {LessonsPageRequested, PageQuery} from '../course.actions';
import {selectLessonsPage} from '../course.selectors';
>>>>>>> master



export class LessonsDataSource implements DataSource<Lesson> {

    private lessonsSubject = new BehaviorSubject<Lesson[]>([]);

    constructor(private store: Store<AppState>) {

    }

<<<<<<< HEAD
    loadLessons(courseId:number,
                pageIndex:number,
                pageSize:number) {

        this.loadingSubject.next(true);

        this.coursesService.findLessons(courseId, pageIndex, pageSize).pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(lessons => this.lessonsSubject.next(lessons));
=======
    loadLessons(courseId:number, page: PageQuery) {
        this.store
          .pipe(
            select(selectLessonsPage(courseId, page)),
            tap(lessons => {
              if (lessons.length > 0) {
                this.lessonsSubject.next(lessons);
              }
              else {
                this.store.dispatch(new LessonsPageRequested({courseId, page}));
              }
            }),
            catchError(() => of([]))
          )
          .subscribe();
>>>>>>> master

    }

    connect(collectionViewer: CollectionViewer): Observable<Lesson[]> {
        console.log("Connecting data source");
        return this.lessonsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.lessonsSubject.complete();
    }

}

