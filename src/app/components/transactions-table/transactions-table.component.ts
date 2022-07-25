import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IDetailTransaction, ITransaction } from 'src/app/models/transaction/transaction.model';

@Component({
  selector: 'app-transactions-table [data]',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TransactionsTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @Input() set data(data: ITransaction[]){
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }
  dataSource:MatTableDataSource<ITransaction> = new MatTableDataSource();
  columnsName = [
    'expand',
    'date',
    'merch_invoice',
    'merchant',
    'location',
    'icao_iata',
    'dodaac',
    'tail',
    'item',
    'total',
    'card',
    'status'
  ];
  transactionSelected: ITransaction | null = null;
  detailTransactionSelected: IDetailTransaction | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  checkAllTransactions(){
    this.dataSource.data.forEach((transaction) => transaction.check = !transaction.check)
  }

  selectTransaction(transaction: ITransaction){
    this.transactionSelected = this.transactionSelected === transaction ? null : transaction
    this.selectDetailTransaction(this.transactionSelected?.details[0] || null)
  }

  selectDetailTransaction(detailTransaction: IDetailTransaction | null){
    this.detailTransactionSelected = this.detailTransactionSelected === detailTransaction ? null : detailTransaction
  }

  selectDetailTransactionByIndex(index: number){
    const detail = this.transactionSelected?.details[index] || null;
    this.detailTransactionSelected = this.detailTransactionSelected === detail ? null : detail
  }

}
