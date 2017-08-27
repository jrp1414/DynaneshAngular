import {Component,OnInit,Input,Output,EventEmitter} from "@angular/core"

@Component({
    selector:"ap-star",
    moduleId:module.id,
    templateUrl:"star.component.html",
    // styles:[outerWidth:52px;]]
    styleUrls:["star.component.css"]
})
export class StarComponent implements OnInit{
    ngOnInit(): void {
        this.starWidth = this.rating*86/5;
    }
    // rating: number = 4;
    @Input() rating: number;
    @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();
    OnRatingClicked():void{
    //  this.ratingClicked.emit("You clicked "+this.rating+", Ok...");   
    this.ratingClicked.emit("You clicked ,"+this.rating+" Ok...");   
    }
    starWidth:number = 86;
    starHeight:number = 15;
}