import { Injectable } from "@angular/core"
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router"
import { ProductService } from "./product_service";

@Injectable()
export class ProductDetailsActivator implements CanActivate {
    isValidProductId: boolean = false;
    constructor(private router: Router, private productService: ProductService) {
    }
    canActivate(route: ActivatedRouteSnapshot): boolean {
        this.isValidProductId = !!this.productService.getProduct(+route.params["id"]);
        if (this.isValidProductId) {
            return true;
        }
        this.router.navigate(["/404"]);
    }

}