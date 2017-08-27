import { Component} from "@angular/core"

@Component({
    selector: "ap-app",
    //template: "<h1>Angular Product Management......</h1>"
    template: `
<ap-welcome></ap-welcome>
<router-outlet></router-outlet>
`
})
export class AppComponent {

}