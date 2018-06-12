<<<<<<< HEAD
import { Router } from '@angular/router';
import { LogoutAction } from "./auth/auth.actions";
import { Component, OnInit, ApplicationInitStatus } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "./reducers/index";
import { map, tap } from "rxjs/operators";
import { authenticate } from "../../server/db-data";
import { isLoggedInSelector, isLoggedOutSelector } from "./auth/auth.selectors";

=======
import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AppState} from './reducers';
import {Logout} from './auth/auth.actions';
import {map} from 'rxjs/operators';
import {isLoggedIn, isLoggedOut} from './auth/auth.selectors';
import {Router} from '@angular/router';
>>>>>>> master

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>
              ,private router: Router) {}

<<<<<<< HEAD
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;
=======
    isLoggedIn$: Observable<boolean>;
>>>>>>> master

    isLoggedOut$: Observable<boolean>;

<<<<<<< HEAD
=======

    constructor(private store: Store<AppState>, private router: Router) {

    }
>>>>>>> master

  ngOnInit() {

<<<<<<< HEAD
    // this.isLoggedIn$ = this.store.pipe(
    //   map(state => state.auth.loggedIn),
    //   tap(state => console.log("in",state)
    //   ));
=======
      this.isLoggedIn$ = this.store
        .pipe(
          select(isLoggedIn)
        );

      this.isLoggedOut$ = this.store
        .pipe(
          select(isLoggedOut)
        );
>>>>>>> master

    // this.isLoggedOut$ = this.store.pipe(
    //   map(state => !(state.auth.loggedIn),
    //   tap(state => console.log("out",state)
    //   )));

<<<<<<< HEAD
    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedInSelector)
      );
=======
    logout() {

      this.store.dispatch(new Logout());

    }
>>>>>>> master

    this.isLoggedOut$ = this.store.pipe(
      select(isLoggedOutSelector)
      );
  }

  logout() {
    this.store.dispatch(new LogoutAction());
    // this.router.navigateByUrl('/login');
  }
}
