import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-buy-label',
  templateUrl: './buy-label.component.html',
  styleUrls: ['./buy-label.component.scss']
})
export class BuyLabelComponent {

  @Input()
  buy: number;

  @ViewChild("rightPath")
  rightPath: ElementRef;

  @ViewChild("rightContent")
  rightContent: ElementRef;

  constructor() { }

  changeBgRight(color1, color2, color3, width) {
    this.rightPath.nativeElement.style.fill = color1;
    this.rightPath.nativeElement.style.stroke = color2;
    this.rightPath.nativeElement.style.strokeWidth = width;
    this.rightContent.nativeElement.style.color = color3;
  }

}
