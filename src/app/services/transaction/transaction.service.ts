import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { ITransaction } from '../../models/transaction/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactionsStore$ = new BehaviorSubject<ITransaction[]>([]);

  constructor(private httpClient: HttpClient) {
  }

  public loadTransactions(){
    this.httpClient.get<ITransaction[]>('https://62db8847d1d97b9e0c505f43.mockapi.io/api/v1/transaction').subscribe((transactions) => this.transactionsStore$.next(transactions))
  }

  public getTransactions = () => this.transactionsStore$.asObservable();

  public gTransactions = () => this.transactionsStore$.asObservable();

  public getAcceptTransactions = () => this.transactionsStore$.asObservable().pipe(
    map((transactions) => transactions.filter((transaction) => transaction.accepted))
  )

  public getInvoiceTasksTransactions = () => this.transactionsStore$.asObservable().pipe(
    map((transactions) => transactions.filter((transaction) => transaction.has_invoice))
  )

}
