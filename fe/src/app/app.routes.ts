import { Routes } from '@angular/router';
import {provideState, provideStore} from "@ngrx/store";
import * as fromUnit from "./units/++state/unit.reducer";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {isDevMode} from "@angular/core";
import {provideEffects} from "@ngrx/effects";
import {UnitEffects} from "./units/++state/unit.effects";

export const routes: Routes = [
  {
    path: '',
    loadChildren:() => import('./main/main.module').then(m=>m.MainModule)
  },
  {
    path: 'units',
    loadChildren:() => import('./units/units.module').then(m=>m.UnitsModule),
  },
  {
    path: '**',
    redirectTo: ''
  }
];
