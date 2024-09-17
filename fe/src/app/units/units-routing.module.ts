import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UnitsComponent} from "./units.component";
import {UnitDetailComponent} from "./unit-detail/unit-detail.component";

const routes: Routes = [
  {
    path: '', component: UnitsComponent,
  },
  {
    path: ':id', component: UnitDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class UnitsRoutingModule { }
