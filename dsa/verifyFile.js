import { createVerify } from 'node:crypto';

export default function verifiyFile(file, publicKey, signature) {
  const verify = createVerify('SHA256');
  verify.update(file);
  verify.end();
  return verify.verify(publicKey, signature, 'hex');
}