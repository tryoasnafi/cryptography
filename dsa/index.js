import fs from 'fs';
import { getPairKey } from './keyPair.js';
import signFile from './signFile.js';
import verifyFile from './verifyFile.js';

// load pair key from key files
const { publicKey, privateKey } = getPairKey();

// load secret file
const data = fs.readFileSync('./secret.txt', 'utf8');
const originalImage = fs.readFileSync('./polbeng-100x100.png');
const editedImage = fs.readFileSync('./polbeng.png');

// sign file
const signature = signFile(originalImage, privateKey);
console.log(`Signature: ${signature}`);

// verify file
const isVerified = verifyFile(editedImage, publicKey, signature);
console.log(`Is verified file? ${isVerified}`);
