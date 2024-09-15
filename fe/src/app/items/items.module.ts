import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import {UiModule} from "../../../projects/fe-lib/src/lib/ui/ui.module";
import {ItemsComponent} from "./items.component";
import {ItemService} from "./services/item.service";


@NgModule({
  declarations: [ItemsComponent],
  imports: [
    CommonModule,
    UiModule,
    ItemsRoutingModule,
  ],
  providers:[ItemService]
})
export class ItemsModule { }
