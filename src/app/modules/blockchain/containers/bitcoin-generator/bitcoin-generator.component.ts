import { Component, OnInit } from '@angular/core';
import {BlockchainService} from "../../services/blockchain.service";
import {sha256} from "js-sha256";
import * as EC from "elliptic";
let base58 = require('bs58');
let RIPEMD160 = require('ripemd160');

@Component({
  selector: 'app-bitcoin-generator',
  templateUrl: './bitcoin-generator.component.html',
  styleUrls: ['./bitcoin-generator.component.scss']
})
export class BitcoinGeneratorComponent implements OnInit {
  address: string = '';
  publicHash: string = '';
  WIF: string = '';
  BTCprivateKey: string = '';
  BTCpublicKey: string = '';
  BTCKeys: string[] = [];


  constructor() {
    this.BTCKeys = this.generateBTCWallet();
    this.BTCpublicKey = this.BTCKeys[0];
    this.BTCprivateKey = this.BTCKeys[1];
    this.publicHash = this.BTCKeys[2];
    this.address = this.BTCKeys[3];
    this.WIF = this.generatePrivateKeyWIF(this.BTCprivateKey);
  }

  ngOnInit(): void {
  }

  private generatePrivateKeyWIF(privateKey:any) : any {
    const prefixPrivate = Buffer.from("80" + privateKey, 'hex');
    const derivedHash = sha256(prefixPrivate);
    const recursiveDerivedHash = sha256(Buffer.from(derivedHash, 'hex'));
    const checksum = recursiveDerivedHash.substring(0, 8);
    const addCheckSum = prefixPrivate.toString('hex') + checksum;
    return base58.encode(Buffer.from(addCheckSum, 'hex'));
  }

  private generateBTCWallet(): string[] {
    const BTCec = new EC.ec('secp256k1')
    const BTCkey = BTCec.genKeyPair();

    const BTCpublicKey = BTCkey.getPublic('hex');
    const BTCprivateKey = BTCkey.getPrivate('hex');

    const BTCwalletKeys: string[] = [];

    BTCwalletKeys.push(BTCpublicKey, BTCprivateKey)

    //Public key hash
    let hash = sha256(Buffer.from(BTCpublicKey, 'hex'))
    let publicKeyHash = new RIPEMD160().update(Buffer.from(hash,'hex')).digest();
    //Address generation
    let privatePrefix = Buffer.from('00'+ publicKeyHash.toString('hex'), 'hex');
    let SHA256Prefix = sha256(privatePrefix);
    let DoubleSHA256Prefix = sha256(Buffer.from(SHA256Prefix, 'hex'))
    let checksum = DoubleSHA256Prefix.substring(0, 8);
    let addedCheckSum = privatePrefix.toString('hex') + checksum;
    let address = base58.encode(Buffer.from(addedCheckSum, 'hex'))

    BTCwalletKeys.push(publicKeyHash, address)

    return BTCwalletKeys;
  }

  public createBTCWallet(){
    this.BTCKeys = this.generateBTCWallet();
    this.BTCpublicKey = this.BTCKeys[0];
    this.BTCprivateKey = this.BTCKeys[1];
    this.publicHash = this.BTCKeys[2];
    this.address = this.BTCKeys[3];
    this.WIF = this.generatePrivateKeyWIF(this.BTCprivateKey);
  }

}
