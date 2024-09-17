import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitsRoutingModule } from './units-routing.module';
import { UnitsComponent } from './units.component';

import { UnitDetailComponent } from './unit-detail/unit-detail.component';
import {UiModule} from "fe-lib";
@NgModule({
  declarations: [
    UnitsComponent,
    UnitDetailComponent,
  ],
  imports: [
    CommonModule,
    UnitsRoutingModule,
    UiModule,
  ],
  providers:[

  ]
})
export class UnitsModule { }
