export interface IProduct{
    id:number;
    Name: string;
    ProductId: string;
    Price: number;
    Discount: number;
    Rating: number;
    Details:ProductDetail;
    //GetDiscountedPrice(Price: number, Discount: number): number;
}

//export interface IBook {

//}


export class Product{
    id:number;
    Name: string;
    ProductCode: string;
    Price: number;
    Discount: number;
    Rating: number;
    Message:string;
    Details:ProductDetail;
}

export class ProductDetail{
    Category:string;
    Description:string;
    ImageUrl: string;
}

// export class Product implements IProduct {
//     constructor(Name: string, ProductId: string, Price: number, ImageUrl: string, Discount: number,Rating:number) {
//         this.Name = Name;
//         this.ProductId = ProductId;
//         this.Price = Price;
//         this.Discount = Discount;
//         this.ImageUrl = ImageUrl;
//         this.Rating = Rating;
//     }

//     Name: string;
//     ProductId: string;
//     Price: number;
//     ImageUrl: string;
//     Discount: number;
//     Rating: number;
//     GetDiscountedPrice(Price: number, Discount: number): number {
//         return  Price - ((Price * Discount) / 100);
//     }

//     Message:string;
// }

//export class ChildProduct extends Product {
//    constructor() {
        
//    }
//}