import { Injectable } from '@angular/core';
import { WordArray } from './word-array';
import { Crypto } from 'crypto';

@Injectable()
export class Pbkdf2Service {

  constructor() { }


  // implementation of PBKDF2 algorithm from crypto-js library
  // this is a workaround until we can get that library functional
  // see https://github.com/brix/crypto-js/blob/develop/src/pbkdf2.js for original code
  // see https://github.com/brix/crypto-js/blob/develop/LICENSE for license
  public pbkdf2(password: string, salt: string): string {
    let keySize = 128;
    let iterations = 4096;
    let hmac = Crypto.createHmac('sha256', password);
    let derivedKey = new WordArray();
    let blockIndex = new WordArray([0x00000001]);
    let derivedKeyWords = derivedKey.words;
    let blockIndexWords = blockIndex.words;

    while (derivedKeyWords.length < keySize) {
      let block = hmac.update(salt).finalize(blockIndex);
      hmac.reset();
      let blockWords = block.words;
      let blockWordsLength = blockWords.length;
      let intermediate = block;

      for (let i = 1; i < iterations; i++) {
        intermediate = hmac.finalize(intermediate);
        hmac.reset();

        let intermediateWords = intermediate.words;
        for (let j = 0; j < blockWords.length; j++) {
          blockWords[j] ^= intermediateWords[j];
        }

        derivedKey.concat(block);
        blockIndexWords[0]++;
      }

      derivedKey.sigbits = keySize * 4;
      return derivedKey;

    }

    return '';
  }


}
