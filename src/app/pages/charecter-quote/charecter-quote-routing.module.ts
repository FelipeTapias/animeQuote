import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharecterQuoteComponent } from './charecter-quote.component';

const routes: Routes = [{ path: '', component: CharecterQuoteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharecterQuoteRoutingModule { }
