import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomQuoteRoutingModule } from './random-quote-routing.module';
import { RandomQuoteComponent } from './random-quote.component';


@NgModule({
  declarations: [RandomQuoteComponent],
  imports: [
    CommonModule,
    RandomQuoteRoutingModule
  ]
})
export class RandomQuoteModule { }
