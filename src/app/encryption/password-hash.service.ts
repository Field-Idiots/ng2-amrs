import { Injectable } from '@angular/core';
import { CryptoJS } from 'crypto-js';

@Injectable()
export class PasswordHashService {

  constructor() { }

  public hashPassword(password: string): string {

    return '';
  }

}
