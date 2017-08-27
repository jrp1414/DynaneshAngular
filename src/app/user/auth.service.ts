import {Injectable} from "@angular/core"
import { IUser } from "./user.model";

@Injectable()
export class AuthService{

    currentUser:IUser;
    Validate(userName:string,password:string):void{
        this.currentUser = {Id:1,UserName:userName,FirstName:"Ram",LastName:"Sharma"};
    }

    IsAuthenticated():boolean{
        return !!this.currentUser;
    }
}