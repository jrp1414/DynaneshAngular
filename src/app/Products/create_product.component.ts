import {Component} from "@angular/core"
import { Router } from "@angular/router";

@Component({
    moduleId:module.id,
    templateUrl:"create_product.component.html"
})
export class CreateProductComponent{
    constructor(private router:Router){

    }
    isDirty:boolean= true;
    Cancel():void{
        this.router.navigate(["/products"]);
    }
}
