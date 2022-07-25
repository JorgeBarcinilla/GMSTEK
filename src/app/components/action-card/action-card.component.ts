import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IGeneric } from 'src/app/models/common/generic.model';
import { ITransaction } from 'src/app/models/transaction/transaction.model';

@Component({
  selector: 'app-action-card [transactions] [properties]',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionCardComponent implements OnInit {

  @Input() public title: string = 'No title';
  @Input() public properties: (keyof ITransaction)[] = [];
  @Input() public set transactions(transactions: ITransaction[] | null){
    transactions?.forEach((transaction) => {
      this.properties.forEach((property) => {
        if(transaction[property]) this.data[property] = (this.data[property] || 0) + 1;
      })
    })
    this.quantity = transactions?.length || 0;
    this.colsPropertiesData = Math.ceil(this.properties.length / 2)
  }
  public quantity: number | null = 0;
  public data: IGeneric<number> = {};

  public colsPropertiesData: number = 0;

  constructor() { }

  ngOnInit(): void {
    ;
  }

}
