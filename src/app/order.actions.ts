import { Action } from '@ngrx/store';

export enum OrderActionTypes {
  LoadOrders = '[Order] Load Orders',
  LoadOrdersSuccess = '[Order] Load Orders Success',
  LoadOrdersFailure = '[Order] Load Orders Failure',
}

export class LoadOrders implements Action {
  readonly type = OrderActionTypes.LoadOrders;
}

export class LoadOrdersSuccess implements Action {
  readonly type = OrderActionTypes.LoadOrdersSuccess;
  constructor(public payload: { data: any }) {}
}

export class LoadOrdersFailure implements Action {
  readonly type = OrderActionTypes.LoadOrdersFailure;
  constructor(public payload: { error: string }) {}
}

export type OrderActions = LoadOrders | LoadOrdersSuccess | LoadOrdersFailure;
