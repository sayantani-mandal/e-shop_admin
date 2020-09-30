import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, from } from 'rxjs';
import { Action } from '@ngrx/store';
import * as orderActions from './order.actions';
import { AdminOrdersService } from './admin-orders/admin-orders.service';
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class OrderEffects {
  constructor(
    private actions$: Actions,
    private adminOrderService: AdminOrdersService
  ) {}

  @Effect()
  loadOrders$: Observable<Action> = this.actions$.pipe(
    ofType(orderActions.OrderActionTypes.LoadOrders),
    mergeMap((action) =>
      this.adminOrderService.getAllOrders().pipe(
        map((orders) => new orderActions.LoadOrdersSuccess({ data: orders })),
        catchError((err) =>
          of(new orderActions.LoadOrdersFailure({ error: err }))
        )
      )
    )
  );
}
