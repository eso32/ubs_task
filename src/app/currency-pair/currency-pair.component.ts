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

  increasing: boolean;

  constructor() { }

  ngOnChanges(changes: any): void {
    let { currentValue, previousValue } = changes.buy;
    this.increasing = (currentValue - previousValue) > 0;
  }

  changeBool() {
    this.increasing = !this.increasing;
  }

}

