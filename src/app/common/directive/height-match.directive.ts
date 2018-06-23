import {
  Directive,
  ElementRef,
  EventEmitter,
  Output,
  AfterContentChecked
} from '@angular/core';

@Directive({
  selector: '[appHeightMatch]'
})
export class HeightMatchDirective implements AfterContentChecked {
  @Output() changeHeight: EventEmitter<number> = new EventEmitter<number>();

  constructor(private eleRef: ElementRef) {}

  ngAfterContentChecked() {
    this.changeHeight.emit(this.eleRef.nativeElement.offsetHeight);
  }
}
