import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import {BlockchainComponent} from "./containers/blockchain.component";
import {BlockViewComponent} from "./components/block-view/block-view.component";
import {BlockchainService} from "./services/blockchain.service";
import { CreateTransactionComponent } from "./containers/create-transaction/create-transaction.component";
import { TransactionsTableComponent } from './components/transactions-table/transactions-table.component';
import { PendingTransactionsComponent } from './containers/pending-transactions/pending-transactions.component';
import { SettingsComponent } from './containers/settings/settings.component';
import { WalletBalanceComponent } from './containers/wallet-balance/wallet-balance.component';

@NgModule({
  declarations: [
    BlockchainComponent,
    BlockViewComponent,
    TransactionsTableComponent,
    CreateTransactionComponent,
    PendingTransactionsComponent,
    SettingsComponent,
    WalletBalanceComponent
  ],
  exports: [
    BlockchainComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    BlockchainService
  ]
})

export class BlockchainModule{}
