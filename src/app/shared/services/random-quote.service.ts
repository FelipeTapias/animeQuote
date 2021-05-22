import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimeQuote } from '../../pages/anime-quotes/anime-quote.model';

@Injectable({
  providedIn: 'root'
})
export class RandomQuoteService {

  constructor(private http: HttpClient) { }

  getRandomQuote(): Observable<AnimeQuote> {
    return this.http.get<AnimeQuote>('https://animechan.vercel.app/api/random');
  }

  getQuote(): Observable<any> {
    return this.http.get('https://animechan.vercel.app/api/quotes');
  }
}
