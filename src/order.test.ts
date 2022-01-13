import Item from "./Item";
import Order from "./Order";

test('Order Test', function () {
    const order = new Order();
    order.addItem(new Item('Cigarro', 'Marlbor', 10));
    order.addItem(new Item('Beer', 'Itaipava', 5));
    order.addItem(new Item('Water', 'Preciosa', 2));
 const subtotal=order.getSubtotal()

    expect(subtotal).toBe(17)

    //given when then

})