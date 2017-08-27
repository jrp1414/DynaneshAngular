import { Component,OnInit } from "@angular/core"
import { FormGroup, FormControl, Validators,FormBuilder } from "@angular/forms";

@Component({
    moduleId: module.id,
    templateUrl: "user_signup.component.html"
})
export class UserSignUpComponent implements OnInit {
    constructor(private fb:FormBuilder){

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
            FirstName:["",[Validators.required,Validators.pattern("[a-zA-Z].*")]],
            LastName:""
        });
    }

    // Register(signUpForm:any):void{
    //     console.log(signUpForm.value);
    // }

    Register():void{
        console.log(this.registerForm.value);   
    }
    


}