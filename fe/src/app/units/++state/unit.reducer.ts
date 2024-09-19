import {createFeature, createReducer, createSelector, on} from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import {ICostDev, Unit} from './unit.model';
import { UnitActions } from './unit.actions';
import {IResponseError} from "fe-lib";
import {Nullable, Mutable} from "fe-lib";

interface State extends EntityState<Unit> {
  allUnitsLoaded: boolean;
  error: Nullable<IResponseError> | any;
  selectedUnit: Nullable<Unit>;
  selectedAge:Nullable<string>;
  selectedCost:ICostDev[] ;
  units:Unit[]
}

export const adapter: EntityAdapter<Unit> = createEntityAdapter<Unit>({
});
const removeItems = (array: any[], item:any) => {
  const index = array.indexOf(item);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
}
export const initialState: State = adapter.getInitialState({
  allUnitsLoaded:false,
  selectedUnit: null as unknown as Unit,
  selectedAge: "All",
  selectedCost: [
    {name: 'Wood', value:0, active:false},
    {name: 'Food', value:0, active:false},
    {name: 'Gold', value:0, active:false}
  ],
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
  // on(UnitActions.updateCosts,
  //   (state, {payload}) => adapter.updateMany(payload.articles, state))
  // ),
  on(UnitActions.updateCosts, (state, { selectedCost }) => ({
    ...state,
    selectedCost: state.selectedCost.map((sc => {
      if (sc.name === selectedCost.name) {
        return selectedCost;
      } else {
        return sc;
      }
    }))
  })),
  on(UnitActions.selectedCost, (state, { selectedCost  }) => ({
    ...state,
    selectedCosts: selectedCost
  }))
);
export const unitsFeature = createFeature({
  name: "units",
  reducer,
  extraSelectors: ({ selectUnitsState, selectSelectedAge, selectUnits, selectSelectedCost}) => ({
    ...adapter.getSelectors(selectUnitsState),
    selectUnitsByAgeAndCost: createSelector(
      selectUnitsState,
      selectUnits,
      selectSelectedAge,
      selectSelectedCost,
      (state, units, age, costs) => {
        const activeCosts:ICostDev[] = costs.filter(c=>c.active && c.value > 0);
        const notActiveCosts:ICostDev[] = costs.filter(c=>!c.active || c.value === 0);
        let u: Unit[] = units;
        let sU: Unit[] = [];
        if (activeCosts.length) {
          u = [];
          units.filter((unit:Unit) => {
            if (unit?.cost) {
              const costKey:string[] = Object.keys(unit.cost) as string[];
              if(costKey.length === activeCosts.length) {
                costKey.forEach((key: string) => {
                  activeCosts.forEach((ac:ICostDev) => {
                    if(Object.hasOwn(unit.cost, ac.name) && key === ac.name && unit?.cost && unit.cost[key] >= ac.value ) {
                      u.push(unit)
                    }
                  });
                });
              }
            }
          });
          u.forEach((unit:Unit) => {
            notActiveCosts.forEach((nac:ICostDev) => {
              if (Object.hasOwn(unit.cost, nac.name)) { /* empty */ } else {
                const costKey:string[] = Object.keys(unit.cost) as string[];
                if(costKey.length === activeCosts.length) {
                  costKey.forEach((key: string) => {
                    activeCosts.forEach((ac:ICostDev) => {
                      if(Object.hasOwn(unit.cost, ac.name) && key === ac.name && unit?.cost && unit.cost[key] >= ac.value ) {
                        sU.push(unit)
                      } else {
                        sU = removeItems(sU, unit);
                      }
                    });
                  });
                }
              }
            });
          });
          const unique = [...new Set(sU)];
          units = unique
        }
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
  selectSelectedCost,
  selectEntities,
  selectAll,
  selectTotal,
  selectAllUnitsLoaded,
  selectError,
  selectUnitsByAgeAndCost
} = unitsFeature;
