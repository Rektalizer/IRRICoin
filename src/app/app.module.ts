import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BlockchainModule} from "./modules/blockchain/blockchain.module";

//TODO: Make balance properly rendered
//TODO: Make Pending transactions page properly show transactions after you mine current block (Removing previous transactions)
//TODO: Make page for user Wallet
//TODO: Change dependencies in transaction-table dumb component so it will work without injection of service

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlockchainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
