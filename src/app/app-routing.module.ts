import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlockchainComponent} from "./modules/blockchain/containers/blockchain.component";
import {SettingsComponent} from "./modules/blockchain/containers/settings/settings.component";
import {CreateTransactionComponent} from "./modules/blockchain/containers/create-transaction/create-transaction.component";
import {PendingTransactionsComponent} from "./modules/blockchain/containers/pending-transactions/pending-transactions.component";

const routes: Routes = [
  {path: '', component: BlockchainComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'new/transaction', component: CreateTransactionComponent},
  {path: 'new/transaction/pending', component: PendingTransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
