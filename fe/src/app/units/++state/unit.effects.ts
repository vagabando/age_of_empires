import {inject, Injectable} from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, concatMap, exhaustMap, switchMap, tap} from 'rxjs/operators';
import {map, of} from 'rxjs';
import { UnitActions } from './unit.actions';
import {UnitsApiService} from "../service/units-api.service";


@Injectable()
export class UnitEffects {
  private actions$ = inject(Actions);
  private unitService = inject(UnitsApiService);

  loadUnits$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UnitActions.initUnits),
      concatMap(() =>
        this.unitService.getAll().pipe(
          tap(response => this.unitService.setUnits(response.data)),
          map((response) => UnitActions.loadUnitsSuccess({units: response.data})),
          catchError((err) => of(UnitActions.loadUnitsFailure({error: err}))),
        ))
    );
  });


}
