import { Action } from '@ngrx/store';
<<<<<<< HEAD
import { AuthActions, AuthActionTypes } from './auth.actions';
import { User } from '../model/user.model';
=======
import {User} from '../model/user.model';
import {AuthActions, AuthActionTypes} from './auth.actions';
>>>>>>> master


export interface AuthState {
  loggedIn: boolean,
  user: User
}

export const initialAuthState: AuthState = {
  loggedIn: false,
  user: undefined
};

<<<<<<< HEAD
export function authReducer(state = initialAuthState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginActionType:
    return {
      loggedIn: true,
      user: action.payload.user
    };
    case AuthActionTypes.LogoutActionType:
    return {
      loggedIn: false,
      user: undefined
    }
=======
export function authReducer(state = initialAuthState,
                            action: AuthActions): AuthState {
  switch (action.type) {

    case AuthActionTypes.LoginAction:
      return {
        loggedIn: true,
        user: action.payload.user
      };

    case AuthActionTypes.LogoutAction:
        return {
          loggedIn: false,
          user: undefined
        };

>>>>>>> master
    default:
      return state;
  }
}
