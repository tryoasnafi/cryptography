const fs = require('fs');
const { generateKeyPair } = require('node:crypto');

generateKeyPair('dsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: 'digital signature algorithm'
  }
}, (err, publicKey, privateKey) => {
  // save publicKey and privateKey to files
  console.log(JSON.stringify(publicKey));
  // fs.writeFile('publicKey.pem', publicKey);
  // fs.writeFile('privateKey.pem', privateKey);
});
