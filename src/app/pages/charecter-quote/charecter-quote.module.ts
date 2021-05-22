import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharecterQuoteRoutingModule } from './charecter-quote-routing.module';
import { CharecterQuoteComponent } from './charecter-quote.component';


@NgModule({
  declarations: [CharecterQuoteComponent],
  imports: [
    CommonModule,
    CharecterQuoteRoutingModule
  ]
})
export class CharecterQuoteModule { }
