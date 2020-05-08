import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prediction } from '../models/prediction.model';
import { Observable } from 'rxjs';
import { SignalService } from '../services/signal.service';

@Component({
  selector: 'app-signal-results',
  templateUrl: './signal-results.component.html',
  styleUrls: ['./signal-results.component.scss']
})
export class SignalResultsComponent implements OnInit {

  symbol: string;
  prediction$: Observable<Prediction>;

  constructor(
    private route: ActivatedRoute,
    private signal: SignalService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.symbol = params.symbol.toUpperCase();
      this.prediction$ = this.signal.getSignal(this.symbol);
    });
  }

}
