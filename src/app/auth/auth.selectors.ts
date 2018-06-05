import { AppState } from './../reducers/index';
import { createSelector } from '@ngrx/store';

export const selectAuthState = (state:AppState) => state.auth;
export const isLoggedInSelector = createSelector(
  selectAuthState,
  auth => auth.loggedIn
);

export const isLoggedOutSelector = createSelector(
  isLoggedInSelector,
  isLoggedIn => !isLoggedIn
)
