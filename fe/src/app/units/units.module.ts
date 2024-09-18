import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitsRoutingModule } from './units-routing.module';
import { UnitsComponent } from './units.component';
import { UnitDetailComponent } from './unit-detail/unit-detail.component';
import {UiModule} from "fe-lib";
import { UnitOutComponent } from './unit-out/unit-out.component';
@NgModule({
  declarations: [
    UnitsComponent,
    UnitDetailComponent,
    UnitOutComponent,
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
