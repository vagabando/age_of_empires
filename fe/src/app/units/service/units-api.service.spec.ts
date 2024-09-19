import { TestBed } from '@angular/core/testing';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {HttpClient, provideHttpClient} from "@angular/common/http";
import { UnitsApiService } from './units-api.service';
describe('UnitsApiService', () => {
  let service: UnitsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ provideHttpClient(),
        provideHttpClientTesting()],
    });
    service = TestBed.inject(UnitsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
