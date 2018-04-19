import { TestBed, inject } from '@angular/core/testing';

import { HashPasswordService } from './hash-password.service';

describe('HashPasswordService', () => {
  let service: HashPasswordService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HashPasswordService]
    });
  });

  it('should be created', inject([HashPasswordService], (service: HashPasswordService) => {
    expect(service).toBeTruthy();
  }));

  it('should hash a password', () => {
    let hashed = service.hashPassword('password123');
    expect(hashed).not.toEqual('password123', 'hashPassword()');
  });
});
