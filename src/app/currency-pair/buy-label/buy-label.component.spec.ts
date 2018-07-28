import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyLabelComponent } from './buy-label.component';
import { FormatRateDirective } from '../format-rate/format-rate.directive';

describe('BuyLabelComponent', () => {
  let component: BuyLabelComponent;
  let fixture: ComponentFixture<BuyLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuyLabelComponent, FormatRateDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
