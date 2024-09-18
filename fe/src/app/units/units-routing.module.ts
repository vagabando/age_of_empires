import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UnitsComponent} from "./units.component";
import {UnitDetailComponent} from "./unit-detail/unit-detail.component";
import {UnitOutComponent} from "./unit-out/unit-out.component";

const routes: Routes = [
  {
    path: '', component: UnitOutComponent,
    children:[
      {
        path: '', component: UnitsComponent,
      },
      {
        path: ':id', component: UnitDetailComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class UnitsRoutingModule { }
