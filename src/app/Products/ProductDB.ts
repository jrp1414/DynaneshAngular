import { InMemoryDbService } from "angular-in-memory-web-api";
import { IProduct } from "./Product";
export class ProductDB implements InMemoryDbService {
    createDb(): {} {
        let products :IProduct[] = [
            {
                id:1,
                Name:"Chair",
                ProductId:"GDC-001",
                Price:252.25,
                Discount:10.25,
                Rating:5,                
                Details:{Category:"Furniture",Description:"Test",ImageUrl:"http://pngimg.com/uploads/chair/chair_PNG6900.png"}
            },
            {
                id:2,
                Name:"Table",
                ProductId:"GDC-002",
                Price:1252.25,
                Discount:10.25,
                Rating:5,
                Details:{Category:"Furniture",Description:"Test",ImageUrl:"http://pngimg.com/uploads/chair/chair_PNG6900.png"}
            },
            {
                id:3,
                Name:"Sofa",
                ProductId:"GDC-003",
                Price:2252.25,
                Discount:10.25,
                Rating:5,
                Details:{Category:"Furniture",Description:"Test",ImageUrl:"http://pngimg.com/uploads/chair/chair_PNG6900.png"}
            },
            {
                id:4,
                Name:"Bed",
                ProductId:"GDC-004",
                Price:3252.25,
                Discount:10.25,
                Rating:5,
                Details:{Category:"Furniture",Description:"Test",ImageUrl:"http://pngimg.com/uploads/chair/chair_PNG6900.png"}},
            {
                id:5,
                Name:"Cupboard",
                ProductId:"GDC-005",
                Price:2252.25,
                Discount:10.25,
                Rating:5,
                Details:{Category:"Furniture",Description:"Test",ImageUrl:"http://pngimg.com/uploads/chair/chair_PNG6900.png"}    
            },
            {
                id:6,
                Name:"TV Stand",
                ProductId:"GDC-006",
                Price:1252.25,
                Discount:10.25,
                Rating:5,
                Details:{Category:"Furniture",Description:"Test",ImageUrl:"http://pngimg.com/uploads/chair/chair_PNG6900.png"}    
            },
            {
                id:7,
                Name:"Laptop",
                ProductId:"GDC-007",
                Price:42252.25,
                Discount:10.25,
                Rating:5,
                Details:{Category:"Computer",Description:"Test",ImageUrl:"http://pngimg.com/uploads/chair/chair_PNG6900.png"}    
            },
            {
                id:8,
                Name:"TVS- Apache",
                ProductId:"GDC-008",
                Price:82252.25,
                Discount:10.25,
                Rating:5,
                Details:{Category:"Automobile",Description:"Test",ImageUrl:"http://pngimg.com/uploads/chair/chair_PNG6900.png"}    
            }
        ];
        return {products};
    }

}