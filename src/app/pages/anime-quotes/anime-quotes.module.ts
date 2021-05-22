import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeQuotesRoutingModule } from './anime-quotes-routing.module';
import { AnimeQuotesComponent } from './anime-quotes.component';


@NgModule({
  declarations: [AnimeQuotesComponent],
  imports: [
    CommonModule,
    AnimeQuotesRoutingModule
  ]
})
export class AnimeQuotesModule { }
