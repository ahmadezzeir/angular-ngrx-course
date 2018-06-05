import { Router } from '@angular/router';
import { LogoutAction } from "./auth/auth.actions";
import { Component, OnInit, ApplicationInitStatus } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "./reducers/index";
import { map, tap } from "rxjs/operators";
import { authenticate } from "../../server/db-data";
import { isLoggedInSelector, isLoggedOutSelector } from "./auth/auth.selectors";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>
              ,private router: Router) {}

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;



  ngOnInit() {

    // this.isLoggedIn$ = this.store.pipe(
    //   map(state => state.auth.loggedIn),
    //   tap(state => console.log("in",state)
    //   ));

    // this.isLoggedOut$ = this.store.pipe(
    //   map(state => !(state.auth.loggedIn),
    //   tap(state => console.log("out",state)
    //   )));

    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedInSelector)
      );

    this.isLoggedOut$ = this.store.pipe(
      select(isLoggedOutSelector)
      );
  }

  logout() {
    this.store.dispatch(new LogoutAction());
    // this.router.navigateByUrl('/login');
  }
}
