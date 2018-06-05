import { Action } from '@ngrx/store';
import { AuthActions, AuthActionTypes } from './auth.actions';
import { User } from '../model/user.model';


export interface AuthState {
  loggedIn: boolean,
  user: User
}

export const initialAuthState: AuthState = {
  loggedIn: false,
  user: undefined
};

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
    default:
      return state;
  }
}
