import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthActionTypes, LoginAction, LogoutAction} from './auth.actions';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {defer, of} from 'rxjs';


@Injectable()
export class AuthEffects {
  @Effect({dispatch:false})
  login$ = this.actions$.pipe(
    ofType<LoginAction>(AuthActionTypes.LoginActionType),
    tap(action =>
      localStorage.setItem("user", JSON.stringify(action.payload.user))
    )
  );

  @Effect({dispatch:false})
  logout$ = this.actions$.pipe(
    ofType<LogoutAction>(AuthActionTypes.LogoutActionType),
    tap(() => {
      localStorage.removeItem("user");
      this.router.navigateByUrl('/login');
    })
  );

  @Effect()
  init$ = defer(() => {
    const userDataLocalStorage = localStorage.getItem("user");
    if(userDataLocalStorage) {
      return of(new LoginAction({user:JSON.parse(userDataLocalStorage)}));
    } else {
      return of(new LogoutAction());
    }
  });
  constructor(private actions$: Actions,private router:Router) {}
}
