import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportComponent } from './report/report.component';
import { MainComponent } from './main/main.component';
import { TradingViewComponent } from './trading-view/trading-view.component';
import { MaterialModule } from './shared/material/material.module';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { SignalComponent } from './signal/signal.component';
import { SignalResultsComponent } from './signal-results/signal-results.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    MainComponent,
    TradingViewComponent,
    WatchlistComponent,
    SignalComponent,
    SignalResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
