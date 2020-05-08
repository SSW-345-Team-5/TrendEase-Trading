import { Component, OnInit, Input } from '@angular/core';

declare var TradingView: any;

@Component({
  selector: 'app-trading-view',
  templateUrl: './trading-view.component.html',
  styleUrls: ['./trading-view.component.scss']
})
export class TradingViewComponent implements OnInit {

  @Input() stock: string;
  @Input() crypto: string;

  private chartConfig;
  private chart = undefined;

  constructor() { }

  ngOnInit(): void {
    if (this.getConfig() && !this.chart) {
      new TradingView.widget(this.chartConfig);
    }
  }

  private getConfig() {
    if (this.stock) {
      this.chartConfig = this.stockConfig(this.stock);
      return true;
    } else if (this.crypto) {
      this.chartConfig = this.cryptoConfig(this.crypto);
      return true;
    }
  }

  private stockConfig(symbol: string) {
    return {
      "autosize": true,
      "symbol": `NASDAQ:${symbol}`,
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "hide_legend": true,
      "save_image": false,
      // "studies": [
      //   "DoubleEMA@tv-basicstudies",
      //   "MACD@tv-basicstudies",
      //   "StochasticRSI@tv-basicstudies"
      // ],
      "container_id": "tradingview"
    }
  }

  private cryptoConfig(symbol: string) {
    return {
      "autosize": true,
      "symbol": `BINANCE:${symbol}`,
      "interval": "1",
      "timezone": "Etc/UTC",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "hide_top_toolbar": true,
      "hide_legend": true,
      "allow_symbol_change": true,
      "save_image": false,
      // "studies": [
      //   "DoubleEMA@tv-basicstudies",
      //   "MACD@tv-basicstudies",
      //   "StochasticRSI@tv-basicstudies"
      // ],
      "container_id": "tradingview"
    }
  }

}
