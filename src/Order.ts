import Item from "./Item";

export default class Order{
    code: string;
    items: Item[];

    constructor() {
        this.code = `${Math.floor(Math.random() * 1000)}`;
        this.items = [];
    }

    addItem (item: Item) {
        this.items.push(item);

    }

    getSubtotal () {
        let total = 0;
        for (const item of this.items) {
            total+=item.price;
        }

        return total;
    }
} 