import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { ProductService } from "./product_service";
import { Product, IProduct } from "./Product";

@Component({
    selector: "ap-productDetails",
    moduleId: module.id,
    templateUrl: "product_details.component.html"
})
export class ProductDetailsComponent implements OnInit {
    product: IProduct;
    ngOnInit(): void {
        //this.product = this.productService.getProduct(+this.route.snapshot.params["id"]);
        this.productService.getProduct(+this.route.snapshot.params["id"])
                            .subscribe(val=>{this.product = val},error=>console.log(error));
    }
    constructor(private productService: ProductService,private router:Router, private route: ActivatedRoute) {

    }    
    RedirectToProducts(): void {
        this.router.navigate(["/products"]);
    }
}