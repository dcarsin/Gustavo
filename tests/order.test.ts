import { Order } from '../src/models/order';
import { Sauce } from '../src/models/sauce';
import { Address } from '../src/models/address';

describe('Order Model', () => {
    it('should create an order with the correct properties', () => {
        const address = new Address('123 Main St', 'Anytown', 'Near the park');
        const sauces = [new Sauce(1, 'Ketchup'), new Sauce(2, 'Mustard')];
        const items = [{ id: 1, name: 'Burger', price: 5.99 }];
        const order = new Order(1, items, sauces, 'Delivery', 'Credit Card', address);

        expect(order.orderNumber).toBe(1);
        expect(order.items).toEqual(items);
        expect(order.sauces).toEqual(sauces);
        expect(order.deliveryMethod).toBe('Delivery');
        expect(order.paymentMethod).toBe('Credit Card');
        expect(order.address).toEqual(address);
    });
});