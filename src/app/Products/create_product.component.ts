import { Component, OnInit } from "@angular/core"
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn, FormArray } from "@angular/forms";
import { Router } from "@angular/router";
import { ProductService } from "./product_service";


@Component({
    moduleId: module.id,
    templateUrl: "create_product.component.html"
})
export class CreateProductComponent implements OnInit {
    createForm: FormGroup;
    ngOnInit(): void {
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
    }
    constructor(private router: Router, public fb: FormBuilder, private ps: ProductService) {

    }

    SaveProduct(): void {
        this.ps.saveProduct(this.createForm.value).subscribe(data => {
            console.log(data);
            this.router.navigate(["/products"]);
        }, error => console.log(error));
    }
    isDirty: boolean = true;
    Cancel(): void {
        this.router.navigate(["/products"]);
    }
}
