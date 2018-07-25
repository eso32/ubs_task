import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
