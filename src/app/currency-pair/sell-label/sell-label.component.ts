import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sell-label',
  templateUrl: './sell-label.component.html',
  styleUrls: ['./sell-label.component.scss']
})
export class SellLabelComponent {

  @Input()
  sell: number;

  @ViewChild("leftPath")
  leftPath: ElementRef;

  @ViewChild("leftContent")
  leftContent: ElementRef;

  constructor() { }

  changeBgLeft(color1, color2, color3, width) {
    this.leftPath.nativeElement.style.fill = color1;
    this.leftPath.nativeElement.style.stroke = color2;
    this.leftPath.nativeElement.style.strokeWidth = width;
    this.leftContent.nativeElement.style.color = color3;
  }

}
