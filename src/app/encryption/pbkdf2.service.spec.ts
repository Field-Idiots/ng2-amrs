import { TestBed, inject } from '@angular/core/testing';

import { Pbkdf2Service } from './pbkdf2.service';

describe('Pbkdf2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Pbkdf2Service]
    });
  });

  it('should be created', inject([Pbkdf2Service], (service: Pbkdf2Service) => {
    expect(service).toBeTruthy();
  }));
});
