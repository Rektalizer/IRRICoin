import { Component, OnInit } from '@angular/core';
import {BlockchainService} from "../../services/blockchain.service";

@Component({
  selector: 'app-pending-transactions',
  templateUrl: './pending-transactions.component.html',
  styleUrls: ['./pending-transactions.component.scss']
})
export class PendingTransactionsComponent implements OnInit {

  public pendingTransactions: any[] = [];

  constructor(private blockChainService: BlockchainService) {
    this.pendingTransactions = blockChainService.getPendingTransactions();
  }

  ngOnInit(): void {
  }

  minePendingTransactions(){
    this.blockChainService.minePendingTransactions();
  }

}
