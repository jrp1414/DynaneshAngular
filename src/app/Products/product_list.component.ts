import { Component,OnInit } from "@angular/core"
//import { IProduct, IBook } from "./Product"
import { IProduct, Product } from "./Product"
import { ProductService } from "./product_service";


@Component({
    selector: "ap-products",
    moduleId: module.id,
    // templateUrl: "app/Products/product_list.component.html"
    templateUrl: "product_list.component.html"
})
export class ProductListComponent implements OnInit{
    ngOnInit(): void {
        // this.products = this.productService.getProducts();

        this.productService.getProducts().subscribe(val=>this.products = val,error=>console.log(error));
    }
    // productService: ProductService;
    
    // constructor(_productService:ProductService){
    //     this.productService = _productService;       
    // }

    constructor(private productService:ProductService){        
    }
    
    // products:Product[];
    products:IProduct[];
}





























    //products: IProduct[] = [
    //    {
    //        Name: "Mouse", ProductId: "GDN-001", Price: 253652.02,
    //        ImageUrl: "http://viralinfocom.com/wp-content/uploads/2016/08/944242-mouse.jpg"
    //    },
    //    {
    //        Name: "Keyboard", ProductId: "GDN-002", Price: 4256.02,
    //        ImageUrl: "https://codekeyboards.com/galleria/9.jpg"
    //    },
    //    {
    //        Name: "Monitor", ProductId: "GDN-003", Price: 222.02,
    //        ImageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5029/5029800_sd.jpg;maxHeight=550;maxWidth=642"
    //    },
    //    {
    //        Name: "Printer", ProductId: "GDN-004", Price: 7585.02,
    //        ImageUrl: "http://store.hp.com/wcsstore/hpusstore/Treatment/dsnew-printers-drawer-1-3.jpg"
    //    }
    //];