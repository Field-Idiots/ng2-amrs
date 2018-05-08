import { Injectable } from '@angular/core';

@Injectable()
export class SaltService {
  private s = "";
  public generateLocalSalt(username: string, timestamp: string) {
    this.s = username.concat(timestamp);
  }
  public clearLocalSalt() {
    this.s = "";
  }
}
