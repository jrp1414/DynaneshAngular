import { Component} from "@angular/core"
import { AuthService } from "../user/auth.service";

@Component({
    selector: "ap-welcome",
    moduleId:module.id,
    //template: `<div class="jumbotron"><h2>Welcome to Angular Product Management</h2></div>`
    // templateUrl:"app/Dashboard/welcome.component.html"
    templateUrl:"welcome.component.html"
})
export class WelcomeComponent {
    constructor(private auth:AuthService){

    }
    Name: string = "Dnyanesh";
}