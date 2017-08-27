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
var product_service_1 = require("./product_service");
var ProductListComponent = (function () {
    // productService: ProductService;
    // constructor(_productService:ProductService){
    //     this.productService = _productService;       
    // }
    function ProductListComponent(productService) {
        this.productService = productService;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.products = this.productService.getProducts();
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: "ap-products",
        moduleId: module.id,
        // templateUrl: "app/Products/product_list.component.html"
        templateUrl: "product_list.component.html"
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//products: IProduct[] = [
//    {
//        Name: "Mouse", ProductId: "GDN-001", Price: 253652.02,
//        ImageUrl: "http://viralinfocom.com/wp-content/uploads/2016/08/944242-mouse.jpg"
//    },
//    {
//        Name: "Keyboard", ProductId: "GDN-002", Price: 4256.02,
//        ImageUrl: "https://codekeyboards.com/galleria/9.jpg"
//    },
//    {
//        Name: "Monitor", ProductId: "GDN-003", Price: 222.02,
//        ImageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5029/5029800_sd.jpg;maxHeight=550;maxWidth=642"
//    },
//    {
//        Name: "Printer", ProductId: "GDN-004", Price: 7585.02,
//        ImageUrl: "http://store.hp.com/wcsstore/hpusstore/Treatment/dsnew-printers-drawer-1-3.jpg"
//    }
//]; 
//# sourceMappingURL=product_list.component.js.map