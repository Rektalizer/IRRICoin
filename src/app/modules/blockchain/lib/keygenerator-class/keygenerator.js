// Private key: b9efe3a9106ce8e3019d0bde3496a608c9d4aa17598acd49cd6b4e23b81c1fc8
// Public key: 04e0af4b4479e6614218600dc8b327d0480a9b29f739b9cd8cc35bebb8ed27be5ec3e433b0f8fa7782a75d17b134be26a2d8ef2f400fffcf539235edb54d9ec207

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const key = ec.genKeyPair();
const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');

console.log();
console.log('Private key: ' + privateKey);
console.log('Public key: ' + publicKey);