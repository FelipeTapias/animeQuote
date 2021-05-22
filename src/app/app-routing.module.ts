import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'random', loadChildren: () => import('./pages/random-quote/random-quote.module').then(m => m.RandomQuoteModule) },
  { path: 'anime', loadChildren: () => import('./pages/anime-quotes/anime-quotes.module').then(m => m.AnimeQuotesModule) },
  { path: 'character', loadChildren: () => import('./pages/charecter-quote/charecter-quote.module').then(m => m.CharecterQuoteModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
