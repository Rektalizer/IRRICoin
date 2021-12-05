export class Transaction {
    constructor(fromAddress: any, toAddress: any, amount: any);
    fromAddress: any;
    toAddress: any;
    amount: any;
    timestamp: number;
    calculateHash(): any;
    signTransaction(signingKey: any): void;
    signature: any;
    isValid(): boolean;
}
export class Block {
    constructor(timestamp: any, transactions: any, previousHash?: string);
    timestamp: any;
    transactions: any;
    previousHash: string;
    hash: any;
    nonce: number;
    calculateHash(): any;
    mineBlock(difficulty: any): void;
    hasValidTransaction(): boolean;
}
export class Blockchain {
    pendingTransactions: any[];
    miningReward: number;
    chain: Block[];
    difficulty: number;
    createGenesisBlock(): Block;
    getLatestBlock(): Block;
    minePendingTransactions(miningRewardAddress: any): void;
    addTransaction(transaction: any): void;
    getBalanceOfAddress(address: any): number;
    getAllTransactionsForWallet(address: any): any[];
    isChainValid(): boolean;
}
