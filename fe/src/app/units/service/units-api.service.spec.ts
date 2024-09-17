import { TestBed } from '@angular/core/testing';

import { UnitsApiService } from './units-api.service';

describe('UnitsApiService', () => {
  let service: UnitsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
