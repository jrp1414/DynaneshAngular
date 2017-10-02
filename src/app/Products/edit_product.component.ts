import { Component, OnInit } from "@angular/core"
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn, FormArray } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "./product_service";
import { IProduct } from "./Product";


@Component({
    moduleId: module.id,
    templateUrl: "edit_product.component.html"
})
export class EditProductComponent implements OnInit {
    editForm: FormGroup;
    product:IProduct;
    ngOnInit(): void {
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
        .subscribe(val=>{
            this.product = val;
            this.editForm = this.fb.group({
                id: val.id,
                Name: val.Name,
                ProductId: val.ProductId,
                Price: val.Price,
                Discount: val.Discount,
                Rating: val.Rating,
                Details: this.fb.group({
                    Category: val.Details.Category,
                    Description: val.Details.Description,
                    ImageUrl: val.Details.ImageUrl
                })
            });
        },error=>console.log(error));
        
    }

    
    constructor(private router: Router, public fb: FormBuilder, private ps: ProductService,private route:ActivatedRoute) {

    }

    UpdateProduct(): void {
        this.ps.updateProduct(this.editForm.value).subscribe(data => {
            console.log(data);
            this.router.navigate(["/products"]);
        }, error => console.log(error));
    }

    DeleteProduct(): void {
        this.ps.deleteProduct(this.editForm.value.id).subscribe(data => {
            console.log(data);
            this.router.navigate(["/products"]);
        }, error => console.log(error));
    }
    isDirty: boolean = true;
    Cancel(): void {
        this.router.navigate(["/products"]);
    }
}
