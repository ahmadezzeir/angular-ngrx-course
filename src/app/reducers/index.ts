import { User } from "./../model/user.model";
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";
import { Action,  } from "@ngrx/store";
import { AuthState } from "../auth/auth.reducer";
import {storeFreeze} from 'ngrx-store-freeze';
import { routerReducer } from "@ngrx/router-store";

export interface AppState {
 auth: AuthState
}

export const reducers: ActionReducerMap<AppState> = {
  auth: undefined,
  router: routerReducer
  //router: routerReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [storeFreeze]
  : [];
