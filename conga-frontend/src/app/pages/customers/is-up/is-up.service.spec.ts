import { TestBed, inject } from '@angular/core/testing';

import { IsUpService } from './is-up.service';

describe('IsUpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsUpService]
    });
  });

  it('should be created', inject([IsUpService], (service: IsUpService) => {
    expect(service).toBeTruthy();
  }));
});
