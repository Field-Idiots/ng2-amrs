import { TestBed, inject } from '@angular/core/testing';

import { PrivateKeygen } from './private-keygen';

describe('PrivateKeygen', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrivateKeygen]
    });
  });

  it('should be created', inject([PrivateKeygen], (service: PrivateKeygen) => {
    expect(service).toBeTruthy();
  }));
});
