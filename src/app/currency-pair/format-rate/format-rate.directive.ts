import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[format-rate]'
})
export class FormatRateDirective implements OnChanges {

  @Input('format-rate')
  sell: number;

  span: HTMLSpanElement;

  constructor(private element: ElementRef) {
    this.span = this.element.nativeElement
  }

  ngOnChanges(changes): void {
    this.span.innerHTML = this.formatCurrencyRate(this.sell);
  }

  formatCurrencyRate(rate: number) {
    let castedRate = String(rate);

    let firstPart = castedRate.slice(0, 4);
    let secondPart = castedRate.slice(4, 6);
    let thirdPart = castedRate.slice(6, 7);

    return `
      <span class="first-part">${firstPart}</span><span class="second-part">${secondPart}</span><span class="third-part">${thirdPart}</span>
    `
  }

}
