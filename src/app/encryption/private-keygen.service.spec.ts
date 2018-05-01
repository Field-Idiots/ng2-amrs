import { TestBed, inject } from '@angular/core/testing';

import { PrivateKeygen } from './private-keygen.service';

describe('PrivateKeygen', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrivateKeygen]
    });
  });

  fit('should be created', inject([PrivateKeygen], (service: PrivateKeygen) => {
    expect(service).toBeTruthy();
  }));

  fit('key should not match password input', inject([PrivateKeygen], (service: PrivateKeygen) => {
    let password = 'Ampath123';
    let username = 'Worcester';
    service.createAndStashPKey(password, username);
    expect(password).not.toEqual(service.retrievePKey());
  }));

  fit('keygen should be deterministic', inject([PrivateKeygen], (service: PrivateKeygen) => {
    let password = 'Ampath123';
    let username = 'Worcester';
    service.createAndStashPKey(password, username);
    let retrieved = service.retrievePKey();
    service.createAndStashPKey(password, username);
    expect(retrieved).toEqual(service.retrievePKey());
  }));

  fit('keys from two different logins should not match', inject([PrivateKeygen],
    (service: PrivateKeygen) => {
    let password = 'Ampath123';
    let username = 'Worcester';
    service.createAndStashPKey(password, username);
    let retrieved = service.retrievePKey();
    password = '321htpamA';
    username = 'retsecroW';
    service.createAndStashPKey(password, username);
    expect(retrieved).not.toEqual(service.retrievePKey());
  }));
});
