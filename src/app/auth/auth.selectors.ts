import {createSelector} from '@ngrx/store';


export const selectAuthState = state => state.auth;


<<<<<<< HEAD
export const isLoggedInSelector = createSelector(
=======
export const isLoggedIn = createSelector(
>>>>>>> master
  selectAuthState,
  auth => auth.loggedIn
);


<<<<<<< HEAD
export const isLoggedOutSelector = createSelector(
  isLoggedInSelector,
=======
export const isLoggedOut = createSelector(
  isLoggedIn,
>>>>>>> master
  loggedIn => !loggedIn
);
