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
var EditProductComponent = (function () {
    function EditProductComponent(router, fb, ps, route) {
        this.router = router;
        this.fb = fb;
        this.ps = ps;
        this.route = route;
        this.isDirty = true;
    }
    EditProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editForm = this.fb.group({
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
        this.ps.getProduct(+this.route.snapshot.params["id"])
            .subscribe(function (val) {
            _this.product = val;
            _this.editForm = _this.fb.group({
                id: val.id,
                Name: val.Name,
                ProductId: val.ProductId,
                Price: val.Price,
                Discount: val.Discount,
                Rating: val.Rating,
                Details: _this.fb.group({
                    Category: val.Details.Category,
                    Description: val.Details.Description,
                    ImageUrl: val.Details.ImageUrl
                })
            });
        }, function (error) { return console.log(error); });
    };
    EditProductComponent.prototype.UpdateProduct = function () {
        var _this = this;
        this.ps.updateProduct(this.editForm.value).subscribe(function (data) {
            console.log(data);
            _this.router.navigate(["/products"]);
        }, function (error) { return console.log(error); });
    };
    EditProductComponent.prototype.DeleteProduct = function () {
        var _this = this;
        this.ps.deleteProduct(this.editForm.value.id).subscribe(function (data) {
            console.log(data);
            _this.router.navigate(["/products"]);
        }, function (error) { return console.log(error); });
    };
    EditProductComponent.prototype.Cancel = function () {
        this.router.navigate(["/products"]);
    };
    return EditProductComponent;
}());
EditProductComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "edit_product.component.html"
    }),
    __metadata("design:paramtypes", [router_1.Router, forms_1.FormBuilder, product_service_1.ProductService, router_1.ActivatedRoute])
], EditProductComponent);
exports.EditProductComponent = EditProductComponent;
//# sourceMappingURL=edit_product.component.js.map