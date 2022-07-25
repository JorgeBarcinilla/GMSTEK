import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { DetailsTransactionTableModule } from '../details-transactions-table/details-transaction-table.module';
import { TransactionsTableComponent } from './transactions-table.component';


@NgModule({
  declarations: [
    TransactionsTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    MatPaginatorModule,
    DetailsTransactionTableModule,
    MatButtonModule,
  ],
  exports: [
    TransactionsTableComponent
  ]
})
export class TransactionsTableModule { }
