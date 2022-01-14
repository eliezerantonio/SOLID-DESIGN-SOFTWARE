import Item from "./Item";

export default class Beer extends Item{
    constructor(description: string, price: number) {
        super('Beer', description, price);
    }
     getTaxes (): number {
         return  0.1;
    }
}