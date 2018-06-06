import { AppState } from './../reducers/index';
import { createSelector } from '@ngrx/store';

export const selectAuthState = (state:AppState) => state;
export const isLoggedInSelector = createSelector(
  selectAuthState,
  state => state.auth.loggedIn
);

export const isLoggedOutSelector = createSelector(
  isLoggedInSelector,
  isLoggedIn => !isLoggedIn
)
