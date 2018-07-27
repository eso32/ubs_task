import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  data: any;
  baseData;

  ngOnInit(): void {
    this.baseData = [
      { pair: "USD CHF", buy: 0.99143, sell: 0.99043 },
      { pair: "GBP USD", buy: 1.28495, sell: 1.2836 },
      { pair: "GBP CHF", buy: 1.27378, sell: 1.27147 },
      { pair: "EUR SEK", buy: 9.632, sell: 9.6055 },
      { pair: "USD JPY", buy: 110.467, sell: 110.417 },
      { pair: "EUR JPY", buy: 120.589, sell: 120.491 }
    ];
    this.data = [...this.baseData];

    setInterval(() => {
      this.data.forEach(pair => {
        let basePrice = this.baseData.find(basePair => pair.pair === basePair.pair);
        let randomWithin10per = this.randomizeValue(basePrice.buy);

        pair.buy += randomWithin10per;
        pair.sell += randomWithin10per;
      })
    }, 1000)
  }

  randomizeValue(price) {
    return Math.pow(-1, Math.floor(Math.random() * 10)) * Math.random() * 0.1 * price;
  }
}
