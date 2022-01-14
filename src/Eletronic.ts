import Item from "./Item";

class Eletronic extends Item {
  constructor(description: string, price: number) {
    super("Eletronic", description, price);
  }
  getTaxes(): number {
    return 0.5;
  }
}

export default Eletronic;
