import Item from "./Item";
import TaxItem from "./TaxItem";

class Eletronic extends TaxItem {
  constructor(description: string, price: number) {
    super("Eletronic", description, price);
  }
  getTaxes(date:Date): number {
    return 0.5;
  }
}

export default Eletronic;
