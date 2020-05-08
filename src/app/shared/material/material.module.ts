import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatIconModule
  ]
})
export class MaterialModule { }
