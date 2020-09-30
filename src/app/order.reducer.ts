import { Action } from '@ngrx/store';
import { OrderActions, OrderActionTypes } from './order.actions';

export const orderFeatureKey = 'ordersState';

export interface State {
  orders: any;
  error: string;
}

export const initialState: State = {
  orders: [],
  error: '',
};

export function reducer(state = initialState, action: OrderActions): State {
  switch (action.type) {
    case OrderActionTypes.LoadOrders:
      return {
        ...state,
      };

    case OrderActionTypes.LoadOrdersSuccess:
      return {
        ...state,
        orders: action.payload.data,
        error: '',
      };

    case OrderActionTypes.LoadOrdersFailure:
      return {
        ...state,
        orders: [],
        error: action.payload.error,
      };

    default:
      return state;
  }
}
