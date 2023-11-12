import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input()
  appHighlight: boolean = true;
  @Input()
  color: string = 'yellow'

  constructor(private elementRef: ElementRef, private  renderer: Renderer2) { }

  ngOnChanges() {
    if (this.appHighlight) {
      this.elementRef.nativeElement.style.backgroundColor = this.color;
      this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", "bold");
    } else {
      this.elementRef.nativeElement.style.backgroundColor = 'transparent'
      this.renderer.removeStyle(this.elementRef.nativeElement, "font-weight")
    }
  }
}
