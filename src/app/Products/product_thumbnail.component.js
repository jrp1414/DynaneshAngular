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
var Product_1 = require("./Product");
var router_1 = require("@angular/router");
var ProductThumbnailComponent = (function () {
    function ProductThumbnailComponent(router) {
        this.router = router;
    }
    ProductThumbnailComponent.prototype.SetProduct = function (product) {
        this.product = product;
    };
    ProductThumbnailComponent.prototype.SetMessage = function () {
        console.log("Test");
    };
    ProductThumbnailComponent.prototype.getPriceStyle = function () {
        if (this.product.Price > 1000) {
            return { color: "red", fontWeight: "bold" };
        }
        return {};
    };
    ProductThumbnailComponent.prototype.getPriceClasses = function () {
        if (this.product.Price > 1000) {
            // return {red:"red",bold:"bold"};
            // return ['red','bold'];
            return "red bold";
        }
        // return {};
        // return [];
        return "";
    };
    return ProductThumbnailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Product_1.Product)
], ProductThumbnailComponent.prototype, "product", void 0);
ProductThumbnailComponent = __decorate([
    core_1.Component({
        selector: "ap-productThumbail",
        moduleId: module.id,
        templateUrl: "product_thumbnail.component.html",
        styles: [
            ".red{\n            color:red;\n        }", "\n        .bold{\n            font-weight:bold;\n        }"
        ]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ProductThumbnailComponent);
exports.ProductThumbnailComponent = ProductThumbnailComponent;
//# sourceMappingURL=product_thumbnail.component.js.map