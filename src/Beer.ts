import Item from "./Item";
import TaxItem from "./TaxItem";

export default class Beer extends TaxItem{
    constructor(description: string, price: number) {
        super('Beer', description, price);
    }
     getTaxes (date:Date): number {
         return  0.1;
    }
}