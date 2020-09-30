import { Component, OnInit } from '@angular/core';
import { AdminOrdersService } from './admin-orders.service';
import { Store, select } from '@ngrx/store';
import * as OrderActions from '../order.actions';
import * as fromOrders from '../order.selectors';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css'],
})
export class AdminOrdersComponent implements OnInit {
  orders: any;
  displayedColumns: string[] = [
    'product.proName',
    'firstName',
    'lastName',
    'email',
    'user.mobileNumber',
    'createdAt',
    'price',
    'quantity',
    'price*quantity',
    'status',
  ];
  errorMessage: any;
  constructor(
    private adminOrderService: AdminOrdersService,
    private store: Store
  ) {}

  ngOnInit() {
    this.store.dispatch(new OrderActions.LoadOrders());
    this.store.pipe(select(fromOrders.getOrders)).subscribe((res) => {
      console.log(res);
      this.orders = res;
    });
    this.store.pipe(select(fromOrders.getError)).subscribe((err) => {
      console.log(err);
      this.errorMessage = err;
    });

    // this.getAllUserOrders();
  }

  getAllUserOrders() {
    this.adminOrderService.getAllOrders().subscribe({
      next: (res) => {
        console.log(res);
        this.orders = res;
      },
      error: (err) => {},
    });
  }

  // getAllUserOrders() {
  //   this.adminOrderService.getAllOrders('{getOrdersAdmin}').subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this.orders = res;
  //     },
  //     error: (err) => {},
  //   });
  // }

  changeStatus(status: string, id: string) {
    console.log(status);
    console.log(id);
    this.adminOrderService.changeOrderStatus({ status }, id).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (err) => {},
    });
  }
}
