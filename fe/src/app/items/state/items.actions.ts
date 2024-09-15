import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Items } from './items.model';

export const ItemsActions = createActionGroup({
  source: 'Items/API',
  events: {
    'Load Itemss': props<{ itemss: Items[] }>(),
    'Add Items': props<{ items: Items }>(),
    'Upsert Items': props<{ items: Items }>(),
    'Add Itemss': props<{ itemss: Items[] }>(),
    'Upsert Itemss': props<{ itemss: Items[] }>(),
    'Update Items': props<{ items: Update<Items> }>(),
    'Update Itemss': props<{ itemss: Update<Items>[] }>(),
    'Delete Items': props<{ id: string }>(),
    'Delete Itemss': props<{ ids: string[] }>(),
    'Clear Itemss': emptyProps(),
  }
});
