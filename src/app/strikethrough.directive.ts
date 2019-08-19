import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) {
  
  p  
    this.elem.nativeElement.style.textDecoration='line-through';
   }

}
