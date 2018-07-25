import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyPairComponent } from './currency-pair.component';

describe('CurrencyPairComponent', () => {
  let component: CurrencyPairComponent;
  let fixture: ComponentFixture<CurrencyPairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyPairComponent ]
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
