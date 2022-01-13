import Item from "./Item";
import Order from "./Order";

test('Should calculate order sub total', function () {
    const order = new Order();
    order.addItem(new Item('Cigar', 'Marlbor', 10));
    order.addItem(new Item('Beer', 'Itaipava', 5));
    order.addItem(new Item('Water', 'Preciosa', 2));
    const subtotal=order.getSubtotal()

    expect(subtotal).toBe(17)

    //given when then

})