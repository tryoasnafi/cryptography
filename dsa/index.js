const fs = require('fs');
const { createSign, createVerify } = require('node:crypto');

// load pair key from key files
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

const { publicKey, privateKey } = getPairKey();

// load secret file
// const data = fs.readFileSync('./secret.txt', 'utf8');
const originalImage = fs.readFileSync('./polbeng-100x100.png');
const editedImage = fs.readFileSync('./polbeng.png');

const sign = createSign('SHA256');
// sign.write(data);
sign.write(originalImage);
sign.end();
const signature = sign.sign(privateKey, 'hex');
console.log(signature);

const verify = createVerify('SHA256');
// verify.update(data);
// verify.update('malicious code');
verify.update(originalImage);
// verify.update(editedImage);
verify.end();
console.log(verify.verify(publicKey, signature, 'hex'));