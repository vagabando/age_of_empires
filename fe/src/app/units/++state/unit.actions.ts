import {createActionGroup, emptyProps, props} from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Unit } from './unit.model';
import {IResponseError} from "fe-lib";

export const UnitActions = createActionGroup({
  source: 'Unit/API',
  events: {
    'Init Units': emptyProps(),
    'Load Units Success': props<{ units: Unit[] }>(),
    'Set Unit': props<{ unit: Unit }>(),
    'Load Units Failure': props<{ error: IResponseError }>(),
    // 'Update Unit': props<{ units: Update<Unit> }>(),
    'Clear Units': emptyProps(),
  }
});
