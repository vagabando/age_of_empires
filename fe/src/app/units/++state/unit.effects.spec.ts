import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UnitEffects } from './unit.effects';

describe('UnitEffects', () => {
  let actions$: Observable<any>;
  let effects: UnitEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UnitEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(UnitEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
