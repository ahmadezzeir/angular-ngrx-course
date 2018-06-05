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

  }
}

export class LogoutAction implements Action {
  readonly type = AuthActionTypes.LogoutActionType;
  constructor() {}
}

export type AuthActions = LoginAction | LogoutAction;
