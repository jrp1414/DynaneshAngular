"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
// function RangeValidator(c: AbstractControl):{[key:string]:boolean} | null | string {
//     if (c.value === undefined || isNaN(c.value) || c.value < 18 || c.value > 60) {
//         return { 'range': true };
//     }
//     return null;
// }
function RangeValidator(min, max) {
    return function (c) {
        if (c.value === undefined || isNaN(c.value) || c.value < min || c.value > max) {
            return { 'range': true };
        }
        return null;
    };
}
function EmailMatch(c) {
    var email = c.get("Email");
    var confirmEmail = c.get("ConfirmEmail");
    if (email.value === confirmEmail.value) {
        return null;
    }
    return { 'match': true };
}
var UserSignUpComponent = (function () {
    function UserSignUpComponent(fb) {
        this.fb = fb;
    }
    // fName= new FormControl({value:"Ram",disabled:false},[Validators.required,Validators.pattern("[a-zA-Z].*")]);
    // lName= new FormControl("Sharma");
    UserSignUpComponent.prototype.ngOnInit = function () {
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
            FirstName: ["", [forms_1.Validators.required, forms_1.Validators.pattern("[a-zA-Z].*")]],
            LastName: ["", [forms_1.Validators.required, forms_1.Validators.pattern("[a-zA-Z].*")]],
            EmailGroup: this.fb.group({
                Email: ["", [forms_1.Validators.required]],
                ConfirmEmail: ["", [forms_1.Validators.required]]
            }, { validator: EmailMatch }),
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
    };
    // Register(signUpForm:any):void{
    //     console.log(signUpForm.value);
    // }
    UserSignUpComponent.prototype.Register = function () {
        console.log(this.registerForm.value);
    };
    UserSignUpComponent.prototype.TestData = function () {
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
        });
    };
    UserSignUpComponent.prototype.CheckNotificationType = function (notificationVia) {
        var phone = this.registerForm.get("Phone");
        if (notificationVia === "phone") {
            phone.setValidators(forms_1.Validators.required);
        }
        else {
            phone.clearValidators();
        }
        phone.updateValueAndValidity();
    };
    return UserSignUpComponent;
}());
UserSignUpComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "user_signup.component.html"
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], UserSignUpComponent);
exports.UserSignUpComponent = UserSignUpComponent;
//# sourceMappingURL=user_signup.component.js.map