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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var product_service_1 = require("./product_service");
var CreateProductComponent = (function () {
    function CreateProductComponent(router, fb, ps) {
        this.router = router;
        this.fb = fb;
        this.ps = ps;
        this.isDirty = true;
    }
    CreateProductComponent.prototype.ngOnInit = function () {
        this.createForm = this.fb.group({
            id: 0,
            Name: "",
            ProductId: "",
            Price: "",
            Discount: "",
            Rating: "",
            Details: this.fb.group({
                Category: "",
                Description: "",
                ImageUrl: ""
            })
        });
    };
    CreateProductComponent.prototype.SaveProduct = function () {
        var _this = this;
        this.ps.saveProduct(this.createForm.value).subscribe(function (data) {
            console.log(data);
            _this.router.navigate(["/products"]);
        }, function (error) { return console.log(error); });
    };
    CreateProductComponent.prototype.Cancel = function () {
        this.router.navigate(["/products"]);
    };
    return CreateProductComponent;
}());
CreateProductComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "create_product.component.html"
    }),
    __metadata("design:paramtypes", [router_1.Router, forms_1.FormBuilder, product_service_1.ProductService])
], CreateProductComponent);
exports.CreateProductComponent = CreateProductComponent;
//# sourceMappingURL=create_product.component.js.map