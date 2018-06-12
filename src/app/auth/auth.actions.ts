<<<<<<< HEAD
import { Router } from "@angular/router";
import { Action } from "@ngrx/store";
import { User } from "../model/user.model";
import { TrustedHtmlString } from "@angular/core/src/sanitization/sanitization";

export enum AuthActionTypes {
  LoginActionType = "Login Action Type",
  LogoutActionType = "Logout Action Type"
}

export class LoginAction implements Action {
  readonly type = AuthActionTypes.LoginActionType;
  constructor(public payload: { user: User }) {
    console.log("payload",payload);
=======
import { Action } from '@ngrx/store';
import {User} from '../model/user.model';



export enum AuthActionTypes {
  LoginAction = '[Login] Action',
  LogoutAction = '[Logout] Action',
}


export class Login implements Action {

  readonly type = AuthActionTypes.LoginAction;

  constructor(public payload: {user: User}) {
>>>>>>> master

  }
}

<<<<<<< HEAD
export class LogoutAction implements Action {
  readonly type = AuthActionTypes.LogoutActionType;
  constructor() {}
}

export type AuthActions = LoginAction | LogoutAction;
=======

export class Logout implements Action {

  readonly type = AuthActionTypes.LogoutAction;


}


export type AuthActions = Login | Logout;
>>>>>>> master
