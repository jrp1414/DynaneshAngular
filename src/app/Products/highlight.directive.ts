import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: "[myHighlight]"
})
export class HighlightDirective {
    // constructor(el: ElementRef) {
    //     el.nativeElement.style.backgroundColor="chartreuse";
    // }

    constructor(private el: ElementRef) {
        //el.nativeElement.style.backgroundColor="chartreuse";
    }

    // @HostListener("mouseenter") onMouseEnter(){
    //     this.Highlight("chartreuse");
    // }

    // @HostListener("mouseleave") onMouseLeave(){
    //     this.Highlight("");
    // }

    // Highlight(color:any):void{
    //     this.el.nativeElement.style.backgroundColor=color;
    // }
    @Input() myHighlight:string;

    @Input() fontColor:string;

    @HostListener("mouseenter") onMouseEnter(){
        this.Highlight(this.myHighlight,this.fontColor);
    }

    @HostListener("mouseleave") onMouseLeave(){
        this.Highlight("","");
    }

    Highlight(color:any,fontColor:any):void{
        this.el.nativeElement.style.backgroundColor=color;
        this.el.nativeElement.style.color = fontColor;
    }
}