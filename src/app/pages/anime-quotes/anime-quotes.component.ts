import { Component, OnInit } from '@angular/core';
import { RandomQuoteService } from '../../shared/services/random-quote.service';
import { AnimeQuote } from './anime-quote.model';

@Component({
  selector: 'app-anime-quotes',
  templateUrl: './anime-quotes.component.html',
  styleUrls: ['./anime-quotes.component.scss']
})
export class AnimeQuotesComponent implements OnInit {

  listAnimeQuote: AnimeQuote = {
    anime: '',
    character: '',
    quote: ''
  };

  constructor(private randomQuoteService: RandomQuoteService) {
    this.getQuote();
  }

  ngOnInit(): void {
  }

  getQuote(): void {
    this.randomQuoteService.getQuote().subscribe(data => {
      this.listAnimeQuote = data;
      console.log(this.listAnimeQuote);
    });
  }

}
