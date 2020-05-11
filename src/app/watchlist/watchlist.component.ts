import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {

  symbols = ['MSFT', 'TSLA', 'AAPL'];
  recommended = ['FANG', 'GE', 'OXY'];

  constructor() { }

  ngOnInit(): void {
  }

  add(symbol: string) {
    console.log(`adding ${symbol}`)
  }

  remove(symbol: string) {
    console.log(`removing ${symbol}`)
  }

}
