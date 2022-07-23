import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'transactions',
    loadChildren: () => import('./modules/transactions/transactions.module').then(m => m.TransactionsModule)
  },
  {
    path: '**',
    redirectTo: 'transactions'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
