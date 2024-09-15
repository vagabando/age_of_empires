import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Items } from './items.model';
import { ItemsActions } from './items.actions';

export const itemsesFeatureKey = 'itemses';

export interface State extends EntityState<Items> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Items> = createEntityAdapter<Items>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(ItemsActions.addItems,
    (state, action) => adapter.addOne(action.items, state)
  ),
  on(ItemsActions.upsertItems,
    (state, action) => adapter.upsertOne(action.items, state)
  ),
  on(ItemsActions.addItemss,
    (state, action) => adapter.addMany(action.itemss, state)
  ),
  on(ItemsActions.upsertItemss,
    (state, action) => adapter.upsertMany(action.itemss, state)
  ),
  on(ItemsActions.updateItems,
    (state, action) => adapter.updateOne(action.items, state)
  ),
  on(ItemsActions.updateItemss,
    (state, action) => adapter.updateMany(action.itemss, state)
  ),
  on(ItemsActions.deleteItems,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(ItemsActions.deleteItemss,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(ItemsActions.loadItemss,
    (state, action) => adapter.setAll(action.itemss, state)
  ),
  on(ItemsActions.clearItemss,
    state => adapter.removeAll(state)
  ),
);

export const itemsesFeature = createFeature({
  name: itemsesFeatureKey,
  reducer,
  extraSelectors: ({ selectItemsesState }) => ({
    ...adapter.getSelectors(selectItemsesState)
  }),
});

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = itemsesFeature;
