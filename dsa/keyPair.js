import fs from 'fs';
import { generateKeyPair } from 'node:crypto';

const generateKey = () => generateKeyPair('dsa', {
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
  fs.writeFile('publicKey.pem', publicKey);
  fs.writeFile('privateKey.pem', privateKey);
});

const getPairKey = () => {
  const publicKey = fs.readFileSync('publicKey.pem', 'utf8');
  const privateKey = fs.readFileSync('privateKey.pem', 'utf8');

  return {
    'publicKey': publicKey,
    'privateKey': {
      key: privateKey,
      passphrase: 'digital signature algorithm'
    }
  };
}

export {
  generateKey,
  getPairKey
};
