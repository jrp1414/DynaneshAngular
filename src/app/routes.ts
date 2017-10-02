

import { ProductListComponent } from "./Products/product_list.component";
import { ProductDetailsComponent } from "./Products/product_details.component";
import { Routes } from "@angular/router";
import { CreateProductComponent } from "./Products/create_product.component";
import { Error404Component } from "./Shared/error404.component";
import { ProductDetailsActivator } from "./Products/ProductDetailsActivator";
import { EditProductComponent } from "./Products/edit_product.component";

export const appRoutes:Routes = [
    {path:"products/new",component:CreateProductComponent,canDeactivate:["CancelCreateProductActivator"]},
    {path:"products",component:ProductListComponent},  
    {path:"products/:id",component:ProductDetailsComponent}, //,canActivate:[ProductDetailsActivator]
    {path:"editproduct/:id",component:EditProductComponent},
    {path:"404",component:Error404Component},
    {path:"",redirectTo:"/products",pathMatch:"full"},
    {path:"user",loadChildren:"app/user/user.module#UserModule"}
    // {path:"*",redirectTo:"/products",pathMatch:"full"},
];