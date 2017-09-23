"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
// @Component({
//     selector: "collapsable-well",
//     template: `
//     <div (click)="toggleContent()" class='well'>
//     <h2>{{title}}</h2>
//     <ng-content  *ngIf="visible"></ng-content>
//     </div>
//     `
// })
var CollapsableWellComponent = (function () {
    function CollapsableWellComponent() {
        //@Input() title: string;
        this.visible = false;
    }
    CollapsableWellComponent.prototype.toggleContent = function () {
        this.visible = !this.visible;
    };
    return CollapsableWellComponent;
}());
CollapsableWellComponent = __decorate([
    core_1.Component({
        selector: "collapsable-well",
        template: "\n    <div (click)=\"toggleContent()\" class='well'>\n    <ng-content select=[collapsableTitle]></ng-content>\n    <ng-content select=[collapsableBody] *ngIf=\"visible\"></ng-content>\n    </div>\n    "
    })
], CollapsableWellComponent);
exports.CollapsableWellComponent = CollapsableWellComponent;
//# sourceMappingURL=collapsable.well.component.js.map