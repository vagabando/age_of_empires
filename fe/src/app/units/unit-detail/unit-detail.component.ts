import {Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from "@ngrx/store";
import {unitsFeature} from "../++state/unit.reducer";
import {ActivatedRoute} from "@angular/router";
import {UnitActions} from "../++state/unit.actions";
import {Unit} from "../++state/unit.model";

@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.component.html',
  styleUrl: './unit-detail.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class UnitDetailComponent implements OnInit {
  store= inject(Store);
  activatedRoute = inject(ActivatedRoute);
  selectedUnit$ = this.store.select(unitsFeature.selectSelectedUnit);
  units$ = this.store.select(unitsFeature.selectAll);
  ngOnInit() {
    this.selectedUnit$.subscribe(_unit=>{
      if(!_unit) {
        this.units$.subscribe((units:Unit[]) => {
          const unit:any  = units.find(u=> u.id === Number(this.activatedRoute.snapshot.params['id']))
          this.store.dispatch(UnitActions.setUnit({unit}));
        })
      }
    })

  }

}
