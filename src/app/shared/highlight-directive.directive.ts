import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirective implements OnInit {

  constructor(private eleRef : ElementRef , private renderer : Renderer2) { }
  ngOnInit(){
    this.renderer.setStyle(this.eleRef.nativeElement,'background-color','Red');
  }
}
