import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { CurrencyPairComponent } from './currency-pair/currency-pair.component';
import { FormatRateDirective } from './currency-pair/format-rate/format-rate.directive';
import { SellLabelComponent } from './currency-pair/sell-label/sell-label.component';
import { BuyLabelComponent } from './currency-pair/buy-label/buy-label.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CurrencyPairComponent,
        FormatRateDirective,
        SellLabelComponent,
        BuyLabelComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
