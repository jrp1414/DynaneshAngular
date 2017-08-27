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
var product_service_1 = require("./product.service");
var ProductDetailsComponent = (function () {
    function ProductDetailsComponent(productService, route) {
        this.productService = productService;
        this.route = route;
        this.Message = "";
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        this.product = this.productService.getProduct(+this.route.snapshot.params["id"]);
    };
    ProductDetailsComponent.prototype.SetMessage = function (message) {
        this.Message = message;
    };
    ProductDetailsComponent.prototype.getPriceCategoryClasses = function () {
        // if(this.product.Price > 4000){
        //     return {red:true,bold:true};
        // }
        // return {};
        // if(this.product.Price > 4000){
        //     return "red bold";
        // }
        // return "";
        if (this.product.Price > 4000) {
            return ["red", "bold"];
        }
        return [];
    };
    return ProductDetailsComponent;
}());
ProductDetailsComponent = __decorate([
    core_1.Component({
        selector: "ap-product",
        moduleId: module.id,
        templateUrl: "productDetails.component.html",
        styles: [
            ".bold{\n          font-weight: bold;   \n        }\n        .red{\n          color: red;   \n        }\n        "
        ]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService, router_1.ActivatedRoute])
], ProductDetailsComponent);
exports.ProductDetailsComponent = ProductDetailsComponent;
// export class ProductDetailsComponent {
//     @Input() product: any;
//     imageWidth: number = 100;
//     imageHeight: number = 100;
//     Message: string = "";
//     SetMessage(message: string): void {
//         this.Message = message;
//     }
//     getPriceCategoryClasses(): any {
//         // if(this.product.Price > 4000){
//         //     return {red:true,bold:true};
//         // }
//         // return {};
//         // if(this.product.Price > 4000){
//         //     return "red bold";
//         // }
//         // return "";
//         if(this.product.Price > 4000){
//             return ["red","bold"];
//         }
//         return [];
//     }
// } 
//# sourceMappingURL=productDetails.component.js.map