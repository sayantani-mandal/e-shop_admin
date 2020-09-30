import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'project';
}

// import { Component, OnInit } from '@angular/core';
// import { Store, select } from '@ngrx/store';
// import * as OrderActions from './order.actions';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent implements OnInit {
//   title = 'project';

//   constructor(private store: Store) {}

//   ngOnInit() {
//     this.store.dispatch(new OrderActions.LoadOrders());
//   }
// }
