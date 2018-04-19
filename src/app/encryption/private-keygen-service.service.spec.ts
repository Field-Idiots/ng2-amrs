import { TestBed, inject } from '@angular/core/testing';

import { PrivateKeygenServiceService } from './private-keygen-service.service';

describe('PrivateKeygenServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrivateKeygenServiceService]
    });
  });

  it('should be created', inject([PrivateKeygenServiceService], (service: PrivateKeygenServiceService) => {
    expect(service).toBeTruthy();
  }));
});
