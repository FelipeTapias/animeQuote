import { Component, OnDestroy, OnInit } from '@angular/core';
import { AnimeQuote } from '../anime-quotes/anime-quote.model';
import { RandomQuoteService } from '../../shared/services/random-quote.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-random-quote',
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.scss']
})
export class RandomQuoteComponent implements OnInit, OnDestroy {

  animeQuote: AnimeQuote = {
    anime: '',
    character: '',
    quote: ''
  };

  ListAnimeQuote: Array<AnimeQuote> = [];
  dataService!: Subscription;

  constructor(private randomQuoteService: RandomQuoteService) {
  }
  ngOnDestroy(): void {
    this.dataService.unsubscribe();
  }

  ngOnInit(): void {
    this.getRandomQuote();
  }

  getRandomQuote(): void {

    // Consumo de servicio con un Subscribe - Unsubscribe
    // if ( this.dataService ) {
    //   this.dataService.unsubscribe();
    // }
    // this.dataService = this.randomQuoteService.getRandomQuote().subscribe(data => {
    //   this.animeQuote = data;
    //   this.ListAnimeQuote.push(this.animeQuote);
    //   this.dataService.unsubscribe();
    // });

    // Consumo de servicio convirtiendo un observable en una promesa
    this.randomQuoteService.getRandomQuote().toPromise()
                                                        .then(data => {
                                                          this.animeQuote = data;
                                                          this.ListAnimeQuote.push(this.animeQuote);
                                                        }).catch(error => {
                                                          console.log(error);
                                                        });
  }

  showMoreAction(): void {
    this.getRandomQuote();
  }
}
