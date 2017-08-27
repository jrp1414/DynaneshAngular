import {NgModule} from "@angular/core"
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { userRoutes } from "./user.routes";
import { ProfileComponent } from "./user_profile.component";
import { LoginComponent } from "./login.component";
import { UserSignUpComponent } from "./user_signup.component";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations:[
        ProfileComponent,
        LoginComponent,
        UserSignUpComponent
    ],
    providers:[]
})
export class UserModule{

}