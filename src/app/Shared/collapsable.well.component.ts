import { Component, Input } from "@angular/core";

// @Component({
//     selector: "collapsable-well",
//     template: `
//     <div (click)="toggleContent()" class='well'>
//     <h2>{{title}}</h2>
//     <ng-content  *ngIf="visible"></ng-content>
//     </div>
//     `
// })

@Component({
    selector: "collapsable-well",
    template: `
    <div (click)="toggleContent()" class='well'>
    <ng-content select=[collapsableTitle]></ng-content>
    <ng-content select=[collapsableBody] *ngIf="visible"></ng-content>
    </div>
    `
})
export class CollapsableWellComponent {
    //@Input() title: string;
    visible: boolean = false;

    toggleContent(): void {
        this.visible = !this.visible;
    }
}