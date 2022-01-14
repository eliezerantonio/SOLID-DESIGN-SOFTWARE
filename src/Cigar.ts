import Item from "./Item";
import TaxItem from "./TaxItem";

class Cigar extends TaxItem {
  constructor(description: string, price: number) {
    super("Cigar", description, price);
  }
  getTaxes(date:Date): number {
  
    return 0.2;
  }
}

export default Cigar;
