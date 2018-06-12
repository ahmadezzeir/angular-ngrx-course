import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
<<<<<<< HEAD
import {AuthActionTypes, LoginAction, LogoutAction} from './auth.actions';
=======
import {AuthActionTypes, Login, Logout} from './auth.actions';
>>>>>>> master
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {defer, of} from 'rxjs';


@Injectable()
export class AuthEffects {
<<<<<<< HEAD
  @Effect({dispatch:false})
  login$ = this.actions$.pipe(
    ofType<LoginAction>(AuthActionTypes.LoginActionType),
    tap(action =>
      localStorage.setItem("user", JSON.stringify(action.payload.user))
    )
=======

  @Effect({dispatch:false})
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.LoginAction),
    tap(action => localStorage.setItem("user", JSON.stringify(action.payload.user)))
>>>>>>> master
  );

  @Effect({dispatch:false})
  logout$ = this.actions$.pipe(
<<<<<<< HEAD
    ofType<LogoutAction>(AuthActionTypes.LogoutActionType),
    tap(() => {
      localStorage.removeItem("user");
      this.router.navigateByUrl('/login');
=======
    ofType<Logout>(AuthActionTypes.LogoutAction),
    tap(() => {

      localStorage.removeItem("user");
      this.router.navigateByUrl('/login');

>>>>>>> master
    })
  );

  @Effect()
  init$ = defer(() => {
<<<<<<< HEAD
    const userDataLocalStorage = localStorage.getItem("user");
    if(userDataLocalStorage) {
      return of(new LoginAction({user:JSON.parse(userDataLocalStorage)}));
    } else {
      return of(new LogoutAction());
    }
  });
  constructor(private actions$: Actions,private router:Router) {}
=======

    const userData = localStorage.getItem("user");

    if (userData) {
       return of(new Login({user:JSON.parse(userData)}));
    }
    else {
      return of(new Logout());
    }

  });

  constructor(private actions$: Actions, private router:Router) {


  }


>>>>>>> master
}
