import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {

  constructor(private elem: ElementRef) {
    setTimeout(() => this.elem.nativeElement.focus(), 0);
  }

}
