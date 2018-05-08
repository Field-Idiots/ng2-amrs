import { TestBed, inject } from '@angular/core/testing';

import { SaltService } from './salt.service';

describe('SaltService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaltService]
    });
  });

  it('should be created', inject([SaltService], (service: SaltService) => {
    expect(service).toBeTruthy();
  }));
});
