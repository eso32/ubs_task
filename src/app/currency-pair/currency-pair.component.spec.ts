import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyPairComponent } from './currency-pair.component';
import { SellLabelComponent } from './sell-label/sell-label.component';
import { BuyLabelComponent } from './buy-label/buy-label.component';
import { FormatRateDirective } from './format-rate/format-rate.directive';

describe('CurrencyPairComponent', () => {
  let component: CurrencyPairComponent;
  let fixture: ComponentFixture<CurrencyPairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CurrencyPairComponent,
        SellLabelComponent,
        BuyLabelComponent,
        FormatRateDirective
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyPairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
