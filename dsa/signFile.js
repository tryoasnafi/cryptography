import { createSign } from 'node:crypto';

export default function signFile(file, privateKey) {
  const sign = createSign('SHA256');
  // sign.write(data);
  sign.write(file);
  sign.end();
  const signature = sign.sign(privateKey, 'hex');
  console.log(signature);

  return signature;
}