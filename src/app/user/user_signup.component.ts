import { Component, OnInit } from "@angular/core"
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from "@angular/forms";

// function RangeValidator(c: AbstractControl):{[key:string]:boolean} | null | string {
//     if (c.value === undefined || isNaN(c.value) || c.value < 18 || c.value > 60) {
//         return { 'range': true };
//     }
//     return null;
// }

function RangeValidator(min: number, max: number): ValidatorFn {
    return (c: AbstractControl) => {
        if (c.value === undefined || isNaN(c.value) || c.value < min || c.value > max) {
            return { 'range': true };
        }
        return null;
    }
}

function EmailMatch(c: AbstractControl):{[key:string]:boolean} | null | string {
    let email = c.get("Email");
    let confirmEmail = c.get("ConfirmEmail");
    if (email.value === confirmEmail.value) {
        return null;
    }
    return {'match':true};
}

@Component({
    moduleId: module.id,
    templateUrl: "user_signup.component.html"
})
export class UserSignUpComponent implements OnInit {
    constructor(private fb: FormBuilder) {

    }
    registerForm: FormGroup;
    // fName= new FormControl({value:"Ram",disabled:false},[Validators.required,Validators.pattern("[a-zA-Z].*")]);
    // lName= new FormControl("Sharma");
    ngOnInit(): void {
        // let fName= new FormControl("Ram");
        // let fName= new FormControl({value:"Ram",disabled:true});
        // let fName= new FormControl("Ram",Validators.required);
        // let fName= new FormControl("Ram",[Validators.required,Validators.pattern("[a-zA-Z].*")]);
        // let fName= new FormControl({value:"Ram",disabled:false},[Validators.required,Validators.pattern("[a-zA-Z].*")]);
        // let lName= new FormControl("Sharma");
        // this.registerForm = new FormGroup({
        //     FirstName:this.fName,
        //     LastName:this.lName
        // });

        this.registerForm = this.fb.group({
            // FirstName:"",
            // FirstName:[""],
            //FirstName:{value:"",disabled:false},
            FirstName: ["", [Validators.required, Validators.pattern("[a-zA-Z].*")]],
            LastName: ["", [Validators.required, Validators.pattern("[a-zA-Z].*")]],
            EmailGroup: this.fb.group({
                Email: ["", [Validators.required]],
                ConfirmEmail: ["", [Validators.required]]
            },{validator:EmailMatch}),
            Phone: [""],
            // Age: ["", ((c: AbstractControl) => {
            //     if (c.value=== undefined || isNaN(c.value) || c.value < 18 || c.value > 60 ) {
            //         return {'range':true};
            //     }
            //     return null;
            // })],
            // Age:["",[RangeValidator]],
            Age: ["", [RangeValidator(18, 60)]],
            Notification: "email",
            SendCatalog: true
        });
    }

    // Register(signUpForm:any):void{
    //     console.log(signUpForm.value);
    // }

    Register(): void {
        console.log(this.registerForm.value);
    }

    TestData(): void {
        // this.registerForm.setValue({
        //     FirstName:"Dnyanesh",
        //     LastName:"Navale"
        // });

        // this.registerForm.setValue({
        //     FirstName:"Dnyanesh"
        //     // LastName:"Navale" -- This will not work, In SetValue you have to set all the values
        // });

        this.registerForm.patchValue({
            FirstName: "Dnyanesh",
            //This will work...
        });

    }
    CheckNotificationType(notificationVia: string): void {
        let phone = this.registerForm.get("Phone");
        if (notificationVia === "phone") {
            phone.setValidators(Validators.required);
        } else {
            phone.clearValidators();
        }

        phone.updateValueAndValidity();
    }

}