import * as OrderActions from './order.actions';

describe('Order', () => {
  it('should create an instance', () => {
    expect(new OrderActions.LoadOrders()).toBeTruthy();
  });
});
