import { Component, OnChanges, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-currency-pair',
  templateUrl: './currency-pair.component.html',
  styleUrls: ['./currency-pair.component.scss']
})
export class CurrencyPairComponent implements OnChanges {

  @Input()
  pair: string;

  @Input()
  buy: number;

  @Input()
  sell: number;

  @ViewChild("leftPath")
  leftPath: ElementRef;

  @ViewChild("rightPath")
  rightPath: ElementRef;

  @ViewChild("leftContent")
  leftContent: ElementRef;

  @ViewChild("rightContent")
  rightContent: ElementRef;

  sellFormated: HTMLElement;
  increasing: boolean;

  constructor() { }

  ngOnChanges(changes: any): void {
    let { currentValue, previousValue } = changes.buy;

    this.increasing = (currentValue - previousValue) > 0;

  }

  changeBgLeft(color1, color2, color3, width) {
    this.leftPath.nativeElement.style.fill = color1;
    this.leftPath.nativeElement.style.stroke = color2;
    this.leftPath.nativeElement.style.strokeWidth = width;
    this.leftContent.nativeElement.style.color = color3;
  }

  changeBgRight(color1, color2, color3, width) {
    this.rightPath.nativeElement.style.fill = color1;
    this.rightPath.nativeElement.style.stroke = color2;
    this.rightPath.nativeElement.style.strokeWidth = width;
    this.rightContent.nativeElement.style.color = color3;
  }

  changeBool() {
    this.increasing = !this.increasing;
  }

}

