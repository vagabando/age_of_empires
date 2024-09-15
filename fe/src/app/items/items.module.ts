import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import {UiModule} from "../../../projects/fe-lib/src/lib/ui/ui.module";
import {ItemsComponent} from "./items.component";
import { StoreModule } from '@ngrx/store';
import * as fromItems from './state/items.reducer';


@NgModule({
  declarations: [ItemsComponent],
  imports: [
    CommonModule,
    UiModule,
    ItemsRoutingModule,
    StoreModule.forFeature(fromItems.itemsesFeatureKey, fromItems.reducer),
    StoreModule.forFeature(fromItems.itemsesFeatureKey, fromItems.reducer)
  ]
})
export class ItemsModule { }
