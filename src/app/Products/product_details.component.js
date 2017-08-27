"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_service_1 = require("./product_service");
var ProductDetailsComponent = (function () {
    function ProductDetailsComponent(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        this.product = this.productService.getProduct(+this.route.snapshot.params["id"]);
    };
    ProductDetailsComponent.prototype.RedirectToProducts = function () {
        this.router.navigate(["/products"]);
    };
    return ProductDetailsComponent;
}());
ProductDetailsComponent = __decorate([
    core_1.Component({
        selector: "ap-productDetails",
        moduleId: module.id,
        templateUrl: "product_details.component.html"
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService, router_1.ActivatedRoute, router_1.Router])
], ProductDetailsComponent);
exports.ProductDetailsComponent = ProductDetailsComponent;
//# sourceMappingURL=product_details.component.js.map