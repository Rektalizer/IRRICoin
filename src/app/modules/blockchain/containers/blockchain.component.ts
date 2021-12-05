import { Component, OnInit } from '@angular/core';
import {BlockchainService} from "../services/blockchain.service";

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.scss']
})
export class BlockchainComponent implements OnInit {
  public blocks: any[] = [];
  public selectedBlock: any = null;
  public balance: number;

  constructor(private blockchainService: BlockchainService) {
    this.blocks = blockchainService.getBlocks();
    this.selectedBlock = this.blocks[0];
    this.balance = blockchainService.getSelfUserBalance();
  }

  ngOnInit(): void {
  }

  showTransactions(block:any){
    this.selectedBlock = block;
    this.balance = this.blockchainService.getSelfUserBalance();
  }

}
