import Item from "./Item";
import TaxItem from "./TaxItem";
//se Cigar/Beer/Water é um subclasse de Item, os objectos do tipo Item posem ser substituidos  por instancias de Cigar/Beer/Water sem quebrar o programa
export default class Order {
  code: string;
  items: Item[];

  constructor() {
    this.code = `${Math.floor(Math.random() * 1000)}`;
    this.items = [];
  }

  addItem(item: Item) {
    this.items.push(item);
  }

  getSubtotal() {
    let total = 0;
    for (const item of this.items) {
      total += item.price;
    }

    return total;
  }

  getTaxes() {
    let taxes = 0;
    for (const item of this.items) {
      if (item instanceof TaxItem) {
        taxes += item.calculateTaxes();
      }
    }

    return taxes;
  }

  getTotal() {
    return this.getSubtotal() + this.getTaxes();
  }
}
