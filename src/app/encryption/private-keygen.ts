import { Injectable } from '@angular/core';
import { CryptoJS } from 'crypto-js';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class PrivateKeygen {

  private filename = 'p_key.json';
  private http = new HttpClientModule();

  constructor() { }

  public createAndStashPKey(password: string){
    let key = CryptoJS.pbkdf2(password);
    console.log(key);
  }

}
