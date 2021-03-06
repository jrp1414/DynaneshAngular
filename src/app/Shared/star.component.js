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
var StarComponent = (function () {
    function StarComponent() {
        this.ratingClicked = new core_1.EventEmitter();
        this.starWidth = 86;
        this.starHeight = 15;
    }
    StarComponent.prototype.ngOnInit = function () {
        this.starWidth = this.rating * 86 / 5;
    };
    StarComponent.prototype.OnRatingClicked = function () {
        //  this.ratingClicked.emit("You clicked "+this.rating+", Ok...");   
        this.ratingClicked.emit("You clicked ," + this.rating + " Ok...");
    };
    return StarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], StarComponent.prototype, "rating", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], StarComponent.prototype, "ratingClicked", void 0);
StarComponent = __decorate([
    core_1.Component({
        selector: "ap-star",
        moduleId: module.id,
        templateUrl: "star.component.html",
        // styles:[outerWidth:52px;]]
        styleUrls: ["star.component.css"]
    })
], StarComponent);
exports.StarComponent = StarComponent;
//# sourceMappingURL=star.component.js.map