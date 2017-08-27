import { Product } from "./Product";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService{
    getProducts():Product[]{
        return products;
    };
    getProduct(id:number):Product{
        return products.find((p:Product)=>p.Id === id);
    }
}

const products: Product[] = [
        {
            Id:1,
            Name:"Chair",
            ProductCode:"GDC-001",
            Price:252.25,
            Discount:10.25,
            Rating:5,
            Message:"",
            Details:{Category:"Furniture",Description:"Test",ImageUrl:"http://pngimg.com/uploads/chair/chair_PNG6900.png"}
        },
        {
            Id:2,
            Name:"Table",
            ProductCode:"GDC-002",
            Price:1252.25,
            Discount:10.25,
            Rating:5,
            Message:"",
            Details:{Category:"Furniture",Description:"Test",ImageUrl:"http://pngimg.com/uploads/chair/chair_PNG6900.png"}
        },
        {
            Id:3,
            Name:"Sofa",
            ProductCode:"GDC-003",
            Price:2252.25,
            Discount:10.25,
            Rating:5,
            Message:"",
            Details:{Category:"Furniture",Description:"Test",ImageUrl:"http://pngimg.com/uploads/chair/chair_PNG6900.png"}
        },
        {
            Id:4,
            Name:"Bed",
            ProductCode:"GDC-004",
            Price:3252.25,
            Discount:10.25,
            Rating:5,
            Message:"",
            Details:{Category:"Furniture",Description:"Test",ImageUrl:"http://pngimg.com/uploads/chair/chair_PNG6900.png"}},
        {
            Id:5,
            Name:"Cupboard",
            ProductCode:"GDC-005",
            Price:2252.25,
            Discount:10.25,
            Rating:5,
            Message:"",
            Details:{Category:"Furniture",Description:"Test",ImageUrl:"http://pngimg.com/uploads/chair/chair_PNG6900.png"}    
        },
        {
            Id:6,
            Name:"TV Stand",
            ProductCode:"GDC-006",
            Price:1252.25,
            Discount:10.25,
            Rating:5,
            Message:"",
            Details:{Category:"Furniture",Description:"Test",ImageUrl:"http://pngimg.com/uploads/chair/chair_PNG6900.png"}    
        },
        {
            Id:7,
            Name:"Laptop",
            ProductCode:"GDC-007",
            Price:42252.25,
            Discount:10.25,
            Rating:5,
            Message:"",
            Details:{Category:"Computer",Description:"Test",ImageUrl:"http://pngimg.com/uploads/chair/chair_PNG6900.png"}    
        },
        {
            Id:8,
            Name:"TVS- Apache",
            ProductCode:"GDC-008",
            Price:82252.25,
            Discount:10.25,
            Rating:5,
            Message:"",
            Details:{Category:"Automobile",Description:"Test",ImageUrl:"http://pngimg.com/uploads/chair/chair_PNG6900.png"}    
        }
    ];