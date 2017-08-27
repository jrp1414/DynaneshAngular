"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ProductService = (function () {
    function ProductService() {
    }
    ProductService.prototype.getProducts = function () {
        return products;
    };
    ;
    ProductService.prototype.getProduct = function (id) {
        return products.find(function (p) { return p.Id === id; });
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable()
], ProductService);
exports.ProductService = ProductService;
var products = [
    {
        Id: 1,
        Name: "Chair",
        ProductCode: "GDC-001",
        Price: 252.25,
        Discount: 10.25,
        Rating: 5,
        Message: "",
        Details: { Category: "Furniture", Description: "Test", ImageUrl: "http://pngimg.com/uploads/chair/chair_PNG6900.png" }
    },
    {
        Id: 2,
        Name: "Table",
        ProductCode: "GDC-002",
        Price: 1252.25,
        Discount: 10.25,
        Rating: 5,
        Message: "",
        Details: { Category: "Furniture", Description: "Test", ImageUrl: "http://pngimg.com/uploads/chair/chair_PNG6900.png" }
    },
    {
        Id: 3,
        Name: "Sofa",
        ProductCode: "GDC-003",
        Price: 2252.25,
        Discount: 10.25,
        Rating: 5,
        Message: "",
        Details: { Category: "Furniture", Description: "Test", ImageUrl: "http://pngimg.com/uploads/chair/chair_PNG6900.png" }
    },
    {
        Id: 4,
        Name: "Bed",
        ProductCode: "GDC-004",
        Price: 3252.25,
        Discount: 10.25,
        Rating: 5,
        Message: "",
        Details: { Category: "Furniture", Description: "Test", ImageUrl: "http://pngimg.com/uploads/chair/chair_PNG6900.png" }
    },
    {
        Id: 5,
        Name: "Cupboard",
        ProductCode: "GDC-005",
        Price: 2252.25,
        Discount: 10.25,
        Rating: 5,
        Message: "",
        Details: { Category: "Furniture", Description: "Test", ImageUrl: "http://pngimg.com/uploads/chair/chair_PNG6900.png" }
    },
    {
        Id: 6,
        Name: "TV Stand",
        ProductCode: "GDC-006",
        Price: 1252.25,
        Discount: 10.25,
        Rating: 5,
        Message: "",
        Details: { Category: "Furniture", Description: "Test", ImageUrl: "http://pngimg.com/uploads/chair/chair_PNG6900.png" }
    },
    {
        Id: 7,
        Name: "Laptop",
        ProductCode: "GDC-007",
        Price: 42252.25,
        Discount: 10.25,
        Rating: 5,
        Message: "",
        Details: { Category: "Computer", Description: "Test", ImageUrl: "http://pngimg.com/uploads/chair/chair_PNG6900.png" }
    },
    {
        Id: 8,
        Name: "TVS- Apache",
        ProductCode: "GDC-008",
        Price: 82252.25,
        Discount: 10.25,
        Rating: 5,
        Message: "",
        Details: { Category: "Automobile", Description: "Test", ImageUrl: "http://pngimg.com/uploads/chair/chair_PNG6900.png" }
    }
];
//# sourceMappingURL=product_service.js.map