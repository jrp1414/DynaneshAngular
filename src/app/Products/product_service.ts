import { Product, IProduct } from "./Product";
import { Injectable,OnInit } from "@angular/core";
import { Http,Response,Headers } from "@angular/http";
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
    getProduct(id:number):Observable<IProduct>{
        // return products.find((p:Product)=>p.Id === id);
        return this.http.get(this.baseUrl+"GetProduct/"+id)
        .map((response:Response)=><IProduct>response.json())
        .catch((error:Response)=>error.json());        
    }

    saveProduct(product:IProduct):Observable<any>{
        return this.http.post(this.baseUrl+"SaveProduct",product,{headers:new Headers({"Content-Type":"application/json"})})
        .map((response:Response)=>console.log("Success"))
        .catch((error:Response)=>{
            console.log(error.json());
            return error.json();
        });        
    }

    // getProduct(id:number):Observable<IProduct>{
    //     // return products.find((p:Product)=>p.Id === id);
    //     return this.http.get(this.baseUrl+"GetProduct/"+id)
    //     .map((response:Response)=><IProduct>response.json())
    //     .catch((error:Response)=>error.json());        
    // }

    // getProduct(id:number):Observable<IProduct>{
    //     // return products.find((p:Product)=>p.Id === id);
    //     return this.http.get(this.baseUrl+"GetProduct/"+id)
    //     .map((response:Response)=><IProduct>response.json())
    //     .catch((error:Response)=>error.json());        
    // }
}
