import {Pipe,PipeTransform } from "@angular/core"
import { Product } from "./Product";

@Pipe({
    name:"productFilter"
})
export class ProductFilter implements PipeTransform {
    transform(products: any[], filterBy:string) {
        filterBy = filterBy?filterBy.toLocaleLowerCase():null;
        return filterBy?(products.filter((p:Product)=>
                        p.Name.toLocaleLowerCase().indexOf(filterBy)!=-1)):products;
    }

}
