import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ITransaction } from 'src/app/models/transaction/transaction.model';

@Component({
  selector: 'app-transactions-tab-content [transactions]',
  templateUrl: './transactions-tab-content.component.html',
  styleUrls: ['./transactions-tab-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsTabContentComponent implements OnInit {

  @Input() set transactions(transactions:ITransaction[]){
    this.initialTransacrtionsValue = transactions
    this.displayedTransactions = transactions
  }
  initialTransacrtionsValue:ITransaction[] = []
  displayedTransactions:ITransaction[] = []
  searchTransactionControl = new FormControl<string>('');

  constructor() { }

  ngOnInit(): void {
    this.searchTransactionControl.valueChanges.subscribe((value) => {
      if(value) this.searchTransaction(value);
    })
  }

  searchTransaction(value: string){
    this.displayedTransactions = this.initialTransacrtionsValue.filter((transaction) => {
      return transaction.merch_invoice.toString().includes(value) || transaction.card.toLowerCase().includes(value.toLocaleLowerCase()) || transaction.icao_iata.toLowerCase().includes(value.toLocaleLowerCase()) ||  transaction.tail.toLowerCase().includes(value.toLocaleLowerCase()) || transaction.dodaac.toLowerCase().includes(value.toLocaleLowerCase())})
  }

}
