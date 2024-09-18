import {Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from "@ngrx/store";
import {UnitActions} from "../++state/unit.actions";

@Component({
  selector: 'app-unit-out',
  templateUrl: './unit-out.component.html',
  styleUrl: './unit-out.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class UnitOutComponent implements OnInit {
  store = inject(Store);
  ngOnInit() {
    this.store.dispatch(UnitActions.initUnits());
  }
}
