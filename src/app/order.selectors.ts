import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './order.reducer';

const getOrderFeatureState = createFeatureSelector<State>('ordersState');

export const getOrders = createSelector(
  getOrderFeatureState,
  (state) => state.orders
);

export const getError = createSelector(
  getOrderFeatureState,
  (state) => state.error
);
