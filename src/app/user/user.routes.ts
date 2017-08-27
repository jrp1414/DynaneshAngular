import { Routes } from "@angular/router";
import { ProfileComponent } from "./user_profile.component";
import { LoginComponent } from "./login.component";
import { UserSignUpComponent } from "./user_signup.component";

export const userRoutes: Routes = [
    {path:"profile",component:ProfileComponent},
    {path:"login",component:LoginComponent},
    {path:"register",component:UserSignUpComponent}
    // /user/login
];