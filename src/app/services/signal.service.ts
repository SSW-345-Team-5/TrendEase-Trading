import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { Prediction } from '../models/prediction.model';

@Injectable({
  providedIn: 'root'
})
export class SignalService {

  private URL: string = 'https://signal-container.azurewebsites.net';

  constructor(private http: HttpClient) { }

  getSignal(symbol: string): Observable<Prediction> {
    console.log(`Getting signal for: ${symbol}...`)
    return this.http.get<Prediction>(`${this.URL}/signal/${symbol.toUpperCase()}`).pipe(take(1));
    // return of({
    //   prediction: [
    //     1,
    //     1,
    //     1
    //   ],
    //   prediction_proba: [
    //     [
    //       0.400924517317065,
    //       0.599075482682935
    //     ],
    //     [
    //       0.400924517317065,
    //       0.599075482682935
    //     ],
    //     [
    //       0.332360395162693,
    //       0.667639604837307
    //     ]
    //   ],
    //   prediction_time: 0.00038,
    //   signal: "BUY",
    //   success: true,
    //   symbol: "MSFT"
    // })
  }

}
