import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.scss']
})
export class SignalComponent implements OnInit {

  tickerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.tickerForm = this.fb.group({
      ticker: ['', Validators.required]
    })
  }

  submit() {
    const ticker: string = this.tickerForm.value.ticker;
    this.router.navigate(['signal', ticker]);
  }

}
