import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'items',
    loadChildren:() => import('./items/items.module').then(m=>m.ItemsModule)
  },
  {
    path:"**",
    redirectTo:"/"
  }
];
