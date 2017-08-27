import {Component} from "@angular/core"
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
    moduleId:module.id,
    templateUrl:"login.component.html"
})
export class LoginComponent{
    constructor(private auth: AuthService,private router:Router){

    }

    logIn(loginForm:any):any{
        // console.log(loginForm);
        this.auth.Validate(loginForm.UserName,loginForm.Password);
        this.router.navigate(["/products"]);
    }
}