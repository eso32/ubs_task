import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CurrencyPairComponent } from './currency-pair/currency-pair.component';
import { FormatRateDirective } from './currency-pair/format-rate/format-rate.directive';
import { SellLabelComponent } from './currency-pair/sell-label/sell-label.component';
import { BuyLabelComponent } from './currency-pair/buy-label/buy-label.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyPairComponent,
    FormatRateDirective,
    SellLabelComponent,
    BuyLabelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
