import {createActionGroup, emptyProps, props} from '@ngrx/store';

import {ICostDev, Unit} from './unit.model';
import {IResponseError} from "fe-lib";

export const UnitActions = createActionGroup({
  source: 'Unit/API',
  events: {
    'Init Units': emptyProps(),
    'Load Units Success': props<{ units: Unit[] }>(),
    'Set Unit': props<{ unit: Unit }>(),
    'Load Units Failure': props<{ error: IResponseError }>(),
    'Set Age':props<{age:string}>(),
    'Selected Cost':props<{ selectedCost:ICostDev[]}>(),
    'Update Costs': props<{ selectedCost:ICostDev}>(),
  }
});
