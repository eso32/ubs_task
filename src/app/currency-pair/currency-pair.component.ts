import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-currency-pair',
  templateUrl: './currency-pair.component.html',
  styleUrls: ['./currency-pair.component.scss']
})
export class CurrencyPairComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {

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


}

