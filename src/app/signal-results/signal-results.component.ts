import { Component, OnInit, Inject } from '@angular/core';
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
    private signal: SignalService,
    private _bottomSheet: MatBottomSheet
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.symbol = params.symbol.toUpperCase();
      this.prediction$ = this.signal.getSignal(this.symbol);
      this.prediction$.subscribe(console.log)
    });
  }

  getConfidence(prediction: Prediction): number {
    let index = (prediction.signal === 'BUY') ? 1 : 0;
    let confidence = 0;
    for (var i = 0; i < prediction.prediction_proba.length; i++) {
      confidence = confidence + prediction.prediction_proba[i][index];
    }
    confidence /= prediction.prediction_proba.length;
    return confidence;
  }

  openSheet(data) {
    this._bottomSheet.open(SignalResultsBottomSheetComponent, {
      data: data
    });
  }

}

import { MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'bottom-sheet',
  templateUrl: 'bottom-sheet.html',
})
export class SignalResultsBottomSheetComponent {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<SignalResultsBottomSheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
