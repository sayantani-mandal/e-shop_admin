import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminOrdersService {
  constructor(private http: HttpClient) {}

  getAllOrders() {
    return this.http
      .get('http://localhost:3006/api/orders/getOrdersAdmin')
      .pipe(
        map((result: { count: number; orders: any }) => {
          return result.orders;
        })
      );
  }

  // getAllOrders(value) {
  //   return this.http.get('http://localhost:3006/api/orders/' + value).pipe(
  //     map((result: { count: number; orders: any }) => {
  //       return result.orders;
  //     })
  //   );
  // }

  changeOrderStatus(data: { status: string }, id: string) {
    return this.http.patch(
      'http://localhost:3006/api/orders/statusChange/' + id,
      data
    );
  }
}
