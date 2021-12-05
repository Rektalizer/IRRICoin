import {Injectable} from '@angular/core';
import {Blockchain} from '../lib/blockchain-class/blockchain';
import {IWalletKey} from "../models/wallet-key.interface";
import * as EC from 'elliptic'


@Injectable({
  providedIn: 'root'
})

export class BlockchainService {

  public blockchainInstance: Blockchain = new Blockchain();
  public walletKeys: Array<IWalletKey> = [];

  constructor() {
    this.generateWalletKeys();

    this.blockchainInstance.difficulty = 2;
    console.log(this.walletKeys[0])
    this.blockchainInstance.minePendingTransactions(this.walletKeys[0]);
  }

  public getBlocks(){
    return this.blockchainInstance.chain;
  }

  public addTransaction(tx:any){
    this.blockchainInstance.addTransaction(tx)
  }

  public getPendingTransactions(){
    return this.blockchainInstance.pendingTransactions;
  }

  public minePendingTransactions(){
    this.blockchainInstance.minePendingTransactions(
      this.walletKeys[0].publicKey
    )
  }

  public getSelfUserBalance(){
    return this.blockchainInstance.getBalanceOfAddress(this.walletKeys[0])
  }

  private generateWalletKeys() {

    const ec = new EC.ec('secp256k1');
    const key = ec.genKeyPair();

    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex')
    })

    console.log(this.walletKeys)

  }

}
