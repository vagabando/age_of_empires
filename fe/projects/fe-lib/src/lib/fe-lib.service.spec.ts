import { TestBed } from '@angular/core/testing';

import { FeLibService } from './fe-lib.service';

describe('FeLibService', () => {
  let service: FeLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
