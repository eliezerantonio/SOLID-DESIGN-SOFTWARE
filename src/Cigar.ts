import Item from "./Item";

class Cigar extends Item {
  constructor(description: string, price: number) {
    super("Cigar", description, price);
  }
  getTaxes(): number {
    return  0.2;
  }
}

export default Cigar;
