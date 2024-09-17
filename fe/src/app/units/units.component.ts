import {Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from "@ngrx/store";
import {unitsFeature} from "./++state/unit.reducer";
import {UnitActions} from "./++state/unit.actions";

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrl: './units.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class UnitsComponent implements OnInit  {
  store = inject(Store);
  units$ = this.store.select(unitsFeature.selectUnits);
  selectedUnit$ = this.store.select(unitsFeature.selectSelectedUnit);
  ngOnInit() {
    this.selectedUnit$ = this.store.select(unitsFeature.selectSelectedUnit);

  }
}
