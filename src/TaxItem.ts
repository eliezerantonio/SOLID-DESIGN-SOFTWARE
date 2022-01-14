import Item from "./Item";

export default abstract class TaxItem extends Item {
   
    constructor(category: string, description: string, price: number) {
        super(category, description, price)
    }

    
    
     calculateTaxes (date:Date): number{
       
        return this.price*this.getTaxes(date);
    }
    
    abstract getTaxes (date:Date): number
}