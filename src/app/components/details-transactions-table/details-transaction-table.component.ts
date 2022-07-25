import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IDetailTransaction } from 'src/app/models/transaction/transaction.model';

@Component({
  selector: 'app-details-transaction-table [data]',
  templateUrl: './details-transaction-table.component.html',
  styleUrls: ['./details-transaction-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsTransactionTableComponent implements OnInit {

  @Output() changeDetailSelected = new EventEmitter<IDetailTransaction>()
  @Input() set data(data: IDetailTransaction[]){
    this.dataSource = new MatTableDataSource([...data, {
      amount: data.reduce((totalAmount, detail) => {
        totalAmount += Number(detail.amount)
        return totalAmount
      }, 0).toString(),
      merchant_description: 'Total'
    }]);
  }
  dataSource:MatTableDataSource<IDetailTransaction> = new MatTableDataSource();
  columnsNames = [
    'merchant_description',
    'product_code',
    'quantity',
    'retail_price',
    'gov_price',
    'amount',
    'actions'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectDetail(detail: IDetailTransaction){
    this.changeDetailSelected.emit(detail)
  }

}
