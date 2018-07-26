import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CurrencyPairComponent } from './currency-pair/currency-pair.component';
import { FormatRateDirective } from './currency-pair/format-rate/format-rate.directive';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyPairComponent,
    FormatRateDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
