import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellLabelComponent } from './sell-label.component';
import { FormatRateDirective } from '../format-rate/format-rate.directive';

describe('SellLabelComponent', () => {
  let component: SellLabelComponent;
  let directive = FormatRateDirective;
  let fixture: ComponentFixture<SellLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SellLabelComponent,
        FormatRateDirective
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
