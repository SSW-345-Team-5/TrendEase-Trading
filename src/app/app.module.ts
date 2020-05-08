import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ReportComponent } from './report/report.component';
import { MainComponent } from './main/main.component';
import { TradingViewComponent } from './trading-view/trading-view.component';
import { MaterialModule } from './shared/material/material.module';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { SignalComponent } from './signal/signal.component';
import { SignalResultsComponent } from './signal-results/signal-results.component';
import { BackComponent } from './back/back.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    MainComponent,
    TradingViewComponent,
    WatchlistComponent,
    SignalComponent,
    SignalResultsComponent,
    BackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
