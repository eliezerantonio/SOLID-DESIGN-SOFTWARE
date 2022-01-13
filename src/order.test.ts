import Item from "./Item";
import Order from "./Order";

test('Should calculate order sub total', function () {
    const order = new Order();
    order.addItem(new Item('Cigar', 'Marlbor', 10));
    order.addItem(new Item('Beer', 'Itaipava', 5));
    order.addItem(new Item('Water', 'Preciosa', 2));
    const subtotal = order.getSubtotal()

    expect(subtotal).toBe(17)

    //given when then

});

test('Should calculate order taxes', function () {
     const order = new Order();
     order.addItem(new Item('Cigar', 'Marlbor', 10)); //0.2=2
     order.addItem(new Item('Beer', 'Itaipava', 5)); //0.1=0.5
    order.addItem(new Item('Water', 'Preciosa', 2)); //0=0
    
    const taxes = order.getTaxes();
    expect(taxes).toBe(2.5)





})