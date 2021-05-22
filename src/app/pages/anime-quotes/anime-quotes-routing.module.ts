import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimeQuotesComponent } from './anime-quotes.component';

const routes: Routes = [{ path: '', component: AnimeQuotesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeQuotesRoutingModule { }
