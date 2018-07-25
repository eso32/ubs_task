import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CurrencyPairComponent } from './currency-pair/currency-pair.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyPairComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
