"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var index_1 = require("./shared/index");
var Index_1 = require("./Index");
var auth_service_1 = require("./user/auth.service");
var http_1 = require("@angular/http");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Index_1.NgModule({
        // imports: [BrowserModule, FormsModule,HttpModule, RouterModule.forRoot(appRoutes),InMemoryWebApiModule.forRoot(ProductDB)],
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(Index_1.appRoutes)],
        declarations: [
            Index_1.AppComponent,
            Index_1.WelcomeComponent,
            Index_1.ProductListComponent,
            Index_1.BookComponent,
            Index_1.StarComponent,
            Index_1.ProductFilter,
            Index_1.ProductDetailsComponent,
            Index_1.ProductThumbnailComponent,
            Index_1.CreateProductComponent,
            Index_1.Error404Component,
            index_1.CollapsableWellComponent,
            Index_1.EditProductComponent,
            Index_1.HighlightDirective
        ],
        providers: [
            Index_1.ProductService,
            { provide: "CancelCreateProductActivator", useValue: CancelCreateProductActivator },
            auth_service_1.AuthService,
            Index_1.ProductDetailsActivator
        ],
        bootstrap: [Index_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
function CancelCreateProductActivator(compoent) {
    // let isDirty:boolean=false;
    if (compoent.isDirty) {
        if (window.confirm("Are you sure to cancel the operation?")) {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=app.module.js.map