import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { ProductService } from "./product_service";
import { Product } from "./Product";

@Component({
    selector: "ap-productDetails",
    moduleId: module.id,
    templateUrl: "product_details.component.html"
})
export class ProductDetailsComponent implements OnInit {
    ngOnInit(): void {
        this.product = this.productService.getProduct(+this.route.snapshot.params["id"]);
    }
    constructor(private productService: ProductService, private route: ActivatedRoute,private router:Router) {

    }

    product: Product;
    RedirectToProducts(): void {
        this.router.navigate(["/products"]);
    }
}