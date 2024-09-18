import {createFeature, createReducer, createSelector, on} from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Unit } from './unit.model';
import { UnitActions } from './unit.actions';
import {IResponseError} from "fe-lib";
import {Nullable} from "fe-lib";

export interface State extends EntityState<Unit> {
  allUnitsLoaded: boolean;
  error: Nullable<IResponseError> | any;
  selectedUnit: Unit;

}

export const adapter: EntityAdapter<Unit> = createEntityAdapter<Unit>({

});

export const initialState: State = adapter.getInitialState({
  allUnitsLoaded:false,
  selectedUnit: null as unknown as Unit,
  error: null,
});

const reducer = createReducer(
  initialState,
  on(UnitActions.loadUnitsSuccess,
    (state, action) => (
      adapter.setAll(action.units, {...state, allUnitsLoaded: true})
    )
  ),
  on(UnitActions.setUnit, (state, { unit }) => ({
    ...state,
    selectedUnit:unit
  })),
  on(UnitActions.initUnits, (state) => (
    {...state}
  )),
  on(UnitActions.loadUnitsFailure, (state, { error }) => ({
    ...state,
    allUnitsLoaded: true,
    error
  })),
  on(UnitActions.clearUnits,
    state => adapter.removeAll(state)
  ),
);

export const unitsFeature = createFeature({
  name: "units",
  reducer,
  extraSelectors: ({ selectUnitsState}) => ({
    ...adapter.getSelectors(selectUnitsState),
  }),
});

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
  selectAllUnitsLoaded,
  selectError,
  selectSelectedUnit
} = unitsFeature;
