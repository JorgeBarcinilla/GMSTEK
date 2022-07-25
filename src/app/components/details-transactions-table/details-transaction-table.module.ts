import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { DetailsTransactionTableComponent } from './details-transaction-table.component';

@NgModule({
  declarations: [
    DetailsTransactionTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule
  ],
  exports: [
    DetailsTransactionTableComponent
  ]
})
export class DetailsTransactionTableModule { }
