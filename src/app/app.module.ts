import { RouterModule, Router } from "@angular/router"
import { BrowserModule } from "@angular/platform-browser"
import { FormsModule } from "@angular/forms"
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


@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
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
        Error404Component
    ],
    providers: [
        ProductService,
        { provide: "CancelCreateProductActivator", useValue: CancelCreateProductActivator },
        AuthService
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