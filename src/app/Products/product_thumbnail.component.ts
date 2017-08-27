import { Component, Input } from "@angular/core"
import { Product } from "./Product";
import { Router } from "@angular/router";

@Component({
    selector: "ap-productThumbail",
    moduleId: module.id,
    templateUrl: "product_thumbnail.component.html",
    styles:[
        `.red{
            color:red;
        }`,`
        .bold{
            font-weight:bold;
        }`

    ]
})
export class ProductThumbnailComponent {
    constructor(private router:Router){

    }
    SetProduct(product: Product): void {
        this.product = product;
    }
    @Input() product: Product;

    SetMessage(): void {
        console.log("Test");
    }

    getPriceStyle(): any {
        if (this.product.Price > 1000) {
            return {color:"red",fontWeight:"bold"};            
        }

        return {};
    }

    getPriceClasses(): any {
        if (this.product.Price > 1000) {
            // return {red:"red",bold:"bold"};
            // return ['red','bold'];
            return "red bold";
        }

        // return {};
        // return [];
        return "";
    }

   
}