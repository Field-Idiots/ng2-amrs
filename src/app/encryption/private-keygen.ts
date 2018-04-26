import { Injectable } from '@angular/core';
import { LocalStorageService } from '../utils/local-storage.service';

@Injectable()
export class PrivateKeygen {

  private localStorageService = new LocalStorageService();
  private STORAGE_KEY = 'privateEncryptionKey';

  public createAndStashPKey(password: string) {
    this.localStorageService.setItem(this.STORAGE_KEY, password);
    console.log(this.retrievePKey());
  }

  public retrievePKey(): string {
    return this.localStorageService.getItem(this.STORAGE_KEY);
  }

}
