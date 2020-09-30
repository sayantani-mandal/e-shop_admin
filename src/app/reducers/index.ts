import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromOrder from '../order.reducer';


export interface State {

  [fromOrder.orderFeatureKey]: fromOrder.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromOrder.orderFeatureKey]: fromOrder.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
