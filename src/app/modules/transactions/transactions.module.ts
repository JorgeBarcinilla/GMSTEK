import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { ActionCardModule } from '../../components/action-card/action-card.module';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { TransactionsTableModule } from '../../components/transactions-table/transactions-table.module';
import { TransactionsTabContentComponent } from './components/transactions-tab-content/transactions-tab-content.component';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';


@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionsTabContentComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    ReactiveFormsModule,
    NavbarModule,
    MatButtonModule,
    ActionCardModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    TransactionsTableModule
  ]
})
export class TransactionsModule { }
