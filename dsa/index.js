import fs from 'fs';
import { getPairKey } from './keyPair.js';
import signFile from './signFile.js';
import verifiyFile from './verifyFile.js';

// load pair key from key files
const { publicKey, privateKey } = getPairKey();

// load secret file
const data = fs.readFileSync('./secret.txt', 'utf8');
const originalImage = fs.readFileSync('./polbeng-100x100.png');
const editedImage = fs.readFileSync('./polbeng.png');

// sign file
const signature = signFile(originalImage, privateKey);
console.log(`Signature: ${signature}`);

// verifiy file
const isVerified = verifiyFile(editedImage, publicKey, signature);
console.log(`Is verified file? ${isVerified}`);