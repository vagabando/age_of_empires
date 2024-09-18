import {createFeature, createReducer, createSelector, on} from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import {ICost, Unit} from './unit.model';
import { UnitActions } from './unit.actions';
import {IResponseError} from "fe-lib";
import {Nullable} from "fe-lib";

export interface State extends EntityState<Unit> {
  allUnitsLoaded: boolean;
  error: Nullable<IResponseError> | never;
  selectedUnit: Nullable<Unit>;
  selectedAge:Nullable<string>;
  selectedCosts:Nullable<ICost>;
  units:Unit[]
}

export const adapter: EntityAdapter<Unit> = createEntityAdapter<Unit>({

});

export const initialState: State = adapter.getInitialState({
  allUnitsLoaded:false,
  selectedUnit: null as unknown as Unit,
  selectedAge: "All",
  selectedCosts: null,
  error: null,
  units: []
});

const reducer = createReducer(
  initialState,
  on(UnitActions.loadUnitsSuccess,
    (state, action) => (
      adapter.setAll(action.units, {...state, allUnitsLoaded: true, units:action.units})
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
  on(UnitActions.setAge, (state, { age }) => ({
    ...state,
    selectedAge:age
  })),
  on(UnitActions.clearUnits,
    state => adapter.removeAll(state)
  ),
);

export const unitsFeature = createFeature({
  name: "units",
  reducer,
  extraSelectors: ({ selectUnitsState, selectSelectedAge, selectUnits}) => ({
    ...adapter.getSelectors(selectUnitsState),
    selectFilteredUnits: createSelector(
      selectUnits,
      selectSelectedAge,
      (units, age) => {
        if (age === 'All') {
          return units;
        } else {
          return units.filter(unit => unit.age === age)
        }
      }
    ),
  }),
});

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
  selectAllUnitsLoaded,
  selectError,
  selectSelectedUnit,
  selectFilteredUnits
} = unitsFeature;
