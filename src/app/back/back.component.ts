import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss']
})
export class BackComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  back() {
    this._location.back();
  }

}
