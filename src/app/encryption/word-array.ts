
// implementation of WordArray class from crypto-js
// not currently functional
export class WordArray {
  public words;
  public sigBytes;

  constructor(word: string) {
    this.words = word;
    this.sigBytes = this.words.length * 4;
  }

  constructor() {
    this.words = [];
    this.sigBytes = this.words.length * 4;
  }

  public concat(wordArray: WordArray): WordArray{
    let thisWords = this.words;
    let thatWords = wordArray.words;
    let thisSigBytes = this.sigBytes;
    let thatSigBytes = wordArray.sigBytes;

    this.clamp();

    if (thisSigBytes % 4) {
      // Copy one byte at a time
      for (let i = 0; i < thatSigBytes; i++) {
        let thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
        thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
      }
    } else {
      // Copy one word at a time
      for (let i = 0; i < thatSigBytes; i += 4) {
        thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
      }
    }
    this.sigBytes += thatSigBytes;
    return this;
  }

  private clamp() {
    let words = this.words;
    let sigBytes = this.sigBytes;

    words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
    words.length = Math.ceil(sigBytes / 4);
  }

}
