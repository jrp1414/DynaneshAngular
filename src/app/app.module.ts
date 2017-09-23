import { RouterModule, Router } from "@angular/router"
import { BrowserModule } from "@angular/platform-browser"
import { FormsModule } from "@angular/forms"
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { CollapsableWellComponent } from "./shared/index";
import {
    NgModule,
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    BookComponent,
    ProductFilter,
    StarComponent,
    ProductDetailsComponent,
    appRoutes,
    ProductService,
    ProductThumbnailComponent,
    CreateProductComponent,
    Error404Component,
    ProductDetailsActivator
} from "./Index"
import { AuthService } from "./user/auth.service";
import { ProductDB } from "./Products/ProductDB";
import { HttpModule } from "@angular/http";


@NgModule({
    // imports: [BrowserModule, FormsModule,HttpModule, RouterModule.forRoot(appRoutes),InMemoryWebApiModule.forRoot(ProductDB)],
    imports: [BrowserModule, FormsModule,HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [
        AppComponent,
        WelcomeComponent,
        ProductListComponent,
        BookComponent,
        StarComponent,
        ProductFilter,
        ProductDetailsComponent,
        ProductThumbnailComponent,
        CreateProductComponent,
        Error404Component,
        CollapsableWellComponent
    ],
    providers: [
        ProductService,
        { provide: "CancelCreateProductActivator", useValue: CancelCreateProductActivator },
        AuthService,
        ProductDetailsActivator        
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}


function CancelCreateProductActivator(compoent: CreateProductComponent): boolean {
    // let isDirty:boolean=false;
    if (compoent.isDirty) {
        if (window.confirm("Are you sure to cancel the operation?")) {
            return true;
        }
    }
    return false;
}