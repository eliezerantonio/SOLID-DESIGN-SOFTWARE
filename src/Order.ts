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

    getTaxes () {
         let taxes = 0;
        for (const item of this.items) {
            if (item.category == "Cigar") {
                taxes += item.price * 0.2;
          }  if (item.category == "Beer") {
                taxes += item.price * 0.1;
          }
        }

        return taxes; 

    }
} 