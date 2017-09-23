import { Product, IProduct } from "./Product";
import { Injectable,OnInit } from "@angular/core";
import { Http,Response } from "@angular/http";
import {Observable} from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class ProductService{
    constructor (private http:Http){

    }
    baseUrl:string="http://localhost/APIApp/";
    getProducts():Observable<IProduct[]>{
        // return this.http.get(this.baseUrl)
        //                 .map((response:Response)=><IProduct[]>response.json().data)
        //                 .catch((error:Response)=>error.json());

        return this.http.get(this.baseUrl+"GetProducts")
        .map((response:Response)=><IProduct[]>response.json())
        .catch((error:Response)=>error.json());
    };
    getProduct(id:number):Product{
        // return products.find((p:Product)=>p.Id === id);
        return {
            id:1,
            Name:"Chair",
            ProductCode:"GDC-001",
            Price:252.25,
            Discount:10.25,
            Rating:5,
            Message:"",
            Details:{Category:"Furniture",Description:"Test",ImageUrl:"http://pngimg.com/uploads/chair/chair_PNG6900.png"}
        };        
    }
}
