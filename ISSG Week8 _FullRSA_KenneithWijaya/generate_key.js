const crypto = require('crypto');

const options = {
  modulusLength: 2048, // default is 2048 bits
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
  }
};

// Generate key pairs for Alice and Bob
const { privateKey: alicePrivateKey, publicKey: alicePublicKey } = crypto.generateKeyPairSync("rsa", options);
const { privateKey: bobPrivateKey, publicKey: bobPublicKey } = crypto.generateKeyPairSync("rsa", options);

// Log Alice's and Bob's keys
console.log("Alice's Private Key:\n", alicePrivateKey);
console.log("Alice's Public Key:\n", alicePublicKey);
console.log("Bob's Private Key:\n", bobPrivateKey);
console.log("Bob's Public Key:\n", bobPublicKey);