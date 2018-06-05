import { User } from "./../model/user.model";
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";
import { Action } from "@ngrx/store";
import { AuthState } from "../auth/auth.reducer";

export interface AppState {
 auth: AuthState
}

export const reducers: ActionReducerMap<AppState> = {
  auth: undefined
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
