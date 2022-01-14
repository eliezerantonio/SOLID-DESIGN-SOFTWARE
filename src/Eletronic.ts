import Item from "./Item";

class Eletronic extends Item {
  constructor(description: string, price: number) {
    super("Eletronic", description, price);
  }
  calculateTaxes(): number {
    return this.price * 0.5;
  }
}

export default Eletronic;
