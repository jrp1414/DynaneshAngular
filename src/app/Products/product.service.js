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
        return Products;
    };
    ProductService.prototype.getProduct = function (id) {
        return Products.find(function (p) { return p.Id === id; });
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable()
], ProductService);
exports.ProductService = ProductService;
var Products = [
    {
        Id: 1, Name: "Mouse", ProductId: "GDN-001", Price: 5365.02, Rating: 2.5,
        Details: { Category: "Computer", Description: "Used as Input Device" }
    },
    {
        Id: 2, Name: "Keyboard", ProductId: "GDN-002", Price: 4256.02, Rating: 2.5,
        Details: { Category: "Computer", Description: "Used as Input Device" }
    },
    {
        Id: 3, Name: "Monitor", ProductId: "GDN-003", Price: 222.02, Rating: 2.5,
        Details: { Category: "Computer", Description: "Used as Output Device" }
    },
    {
        Id: 4, Name: "Printer", ProductId: "GDN-004", Price: 7585.02, Rating: 2.5,
    },
    {
        Id: 5, Name: "RAM", ProductId: "GDN-005", Price: 585.02, Rating: 3.5,
        Details: { Category: "Hardware", Description: "Used as Internal Device" }
    },
    {
        Id: 6, Name: "User Manual", ProductId: "GDN-006", Price: 55.02, Rating: 3.5,
        Details: { Category: "Other", Description: "Used as a Guide to use the computer" }
    }
];
//# sourceMappingURL=product.service.js.map