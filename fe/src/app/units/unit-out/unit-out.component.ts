import {Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {UnitsApiService} from "../service/units-api.service";
import {unitsFeature} from "../++state/unit.reducer";
import {UnitActions} from "../++state/unit.actions";

@Component({
  selector: 'app-unit-out',
  templateUrl: './unit-out.component.html',
  styleUrl: './unit-out.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class UnitOutComponent implements OnInit {
  store = inject(Store);
  unitService = inject(UnitsApiService)
  units$ = this.store.select(unitsFeature.selectAll);
  isLoaded$ = this.store.select(unitsFeature.selectAllUnitsLoaded);
  error$ = this.store.select(unitsFeature.selectError);

  ngOnInit() {
    this.store.dispatch(UnitActions.initUnits());
  }
}
