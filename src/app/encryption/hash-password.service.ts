import { Injectable } from '@angular/core';
import {CryptoJS} from 'crypto-js';

@Injectable()
export class HashPasswordService {

  constructor() { }

  public hashPassword (password: string): string {
    var hash = CryptoJS.SHA256(password);
    return ''
  }

}
