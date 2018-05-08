import { Injectable } from '@angular/core';
import { CryptoJS } from 'crypto-js';

Injectable();
export class EncryptionService {

  constructor() { }
  public encryptRecord(data: any[], privateKey: string) : string{
    let encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), privateKey);
    return encryptedData;

  }

  public decryptRecord(encrypted: string, privateKey: string) : string{
    let decryptedData = CryptoJS.AES.decrypt(encrypted, privateKey);
    return decryptedData;
  }

}
