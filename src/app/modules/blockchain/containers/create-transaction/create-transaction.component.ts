import {Component, OnInit} from '@angular/core';
import {BlockchainService} from "../../services/blockchain.service";
import {Transaction} from "../../lib/blockchain-class/blockchain";

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {

  public newTx: any = new Transaction(null, null, null);
  public walletKey: any;

  constructor(private blockchainService: BlockchainService) {
    this.walletKey = blockchainService.walletKeys[0];
    this.newTx = new Transaction(this.walletKey.publicKey, null, null)
  }

  ngOnInit(): void {
  }

  createTransaction(){
    const newTx = this.newTx;

    newTx.fromAddress = this.walletKey.publicKey;
    newTx.signTransaction(this.walletKey.keyObj);

    try {
      this.blockchainService.addTransaction(this.newTx);
    } catch (e) {
      alert(e);
      return;
    }

    this.newTx = new Transaction(this.walletKey.publicKey, null, null);
  }

}
