"use strict";
var product_list_component_1 = require("./Products/product_list.component");
var product_details_component_1 = require("./Products/product_details.component");
var create_product_component_1 = require("./Products/create_product.component");
var error404_component_1 = require("./Shared/error404.component");
var edit_product_component_1 = require("./Products/edit_product.component");
exports.appRoutes = [
    { path: "products/new", component: create_product_component_1.CreateProductComponent, canDeactivate: ["CancelCreateProductActivator"] },
    { path: "products", component: product_list_component_1.ProductListComponent },
    { path: "products/:id", component: product_details_component_1.ProductDetailsComponent },
    { path: "editproduct/:id", component: edit_product_component_1.EditProductComponent },
    { path: "404", component: error404_component_1.Error404Component },
    { path: "", redirectTo: "/products", pathMatch: "full" },
    { path: "user", loadChildren: "app/user/user.module#UserModule" }
];
//# sourceMappingURL=routes.js.map