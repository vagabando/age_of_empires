import {createFeature, createReducer, createSelector, on} from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Unit } from './unit.model';
import { UnitActions } from './unit.actions';
import {IResponseError} from "fe-lib";
import {Nullable} from "../../../../projects/fe-lib/src/lib/ui/interfaces/http.interface";


export interface State extends EntityState<Unit> {
  allUnitsLoaded: boolean;
  error: Nullable<IResponseError>;
  selectedId: number|null;
  units: Unit[];
  q:string;
}

export const adapter: EntityAdapter<Unit> = createEntityAdapter<Unit>();

export const initialState: State = adapter.getInitialState({
  allUnitsLoaded:false,
  selectedId: null,
  error: null,
  q: '',
  units: []
});

const reducer = createReducer(
  initialState,
  on(UnitActions.loadUnitsSuccess,
    (state, action) => (
      adapter.setAll(action.units, {...state, allUnitsLoaded: true})
    )
  ),
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


// on(DashboardActions.initCustomerJackpotsFailure, (state, { customerJackpotsError }) => ({
//   ...state,
//   customerJackpots: undefined,
//   customerJackpotsLoaded: true,
//   customerJackpotsError,
// })),

  // on(UnitActions.loadUnitsSuccess, (state, { units }) => ({
  //   ...state,
  //   units,
  //   isLoading: false,
  //   unitError: null,
  // })),
  // on(UnitActions.upsertUnit,
  //   (state, action) => adapter.upsertOne(action.unit, state)
  // ),
  // on(UnitActions.addUnits,
  //   (state, action) => adapter.addMany(action.units, state)
  // ),
  // on(UnitActions.upsertUnits,
  //   (state, action) => adapter.upsertMany(action.units, state)
  // ),
  // on(UnitActions.updateUnit,
  //   (state, action) => adapter.updateOne(action.unit, state)
  // ),
  // on(UnitActions.updateUnits,
  //   (state, action) => adapter.updateMany(action.units, state)
  // ),
  // on(UnitActions.deleteUnit,
  //   (state, action) => adapter.removeOne(action.id, state)
  // ),
  // on(UnitActions.deleteUnits,
  //   (state, action) => adapter.removeMany(action.ids, state)
  // ),

);

export const unitsFeature = createFeature({
  name: "units",
  reducer,
  extraSelectors: ({ selectSelectedId,  selectUnits})=>({
    selectSelectedUnit: createSelector(
      selectSelectedId,
      selectUnits,
      (selectedId, units) => units.find((u) => u.id === selectedId)
    ),

  })
  // extraSelectors: ({ selectQ, selectUnits }) => {
  //   const selectFilteredBooks = createSelector(
  //     selectQ,
  //     selectUnits,
  //     (query, units) => units.filter((unit) => unit.name.includes(query))
  //   );
  //   const selectFilteredBooksWithAge = createSelector(
  //     selectFilteredBooks,
  //     (books) => books.filter((book) => book.age === 'All')
  //   );
  //   return { selectFilteredBooks, selectFilteredBooksWithAge };
  // },
});

export const {
  // selectFilteredBooks,
  // selectFilteredBooksWithAge
  // selectIds,
  // selectEntities,
  // selectAll,
  // selectTotal,
} = unitsFeature;
