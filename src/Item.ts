export default abstract class Item {
  description: string;
  category: string;
  price: number;

  constructor(category: string, description: string, price: number) {
    this.category = category;
    this.description = description;
    this.price = price;
  }

    calculateTaxes (): number{
       
        return this.price*this.getTaxes();
    }
    
    abstract getTaxes (): number
}
