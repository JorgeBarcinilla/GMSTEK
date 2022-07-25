import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsComponent implements OnInit {

  transactions$ = this.transactionService.getTransactions();
  acceptTransactions$ = this.transactionService.getAcceptTransactions()
  invoiceTasksTransactions$ = this.transactionService.getInvoiceTasksTransactions()

  constructor(private transactionService: TransactionService) {
    this.transactionService.loadTransactions();
  }

  ngOnInit(): void {
  }

}
