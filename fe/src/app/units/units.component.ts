import {AfterViewInit, Component, inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Store} from "@ngrx/store";
import {UnitActions} from "./++state/unit.actions";
import {unitsFeature} from "./++state/unit.reducer";
import {UnitsApiService} from "./service/units-api.service";
import {MatTableDataSource} from "@angular/material/table";
import {ICostDev, Unit} from "./++state/unit.model";
import {MatPaginator} from "@angular/material/paginator";
import {debounceTime} from "rxjs";
import {Router} from "@angular/router";
import {Update} from "@ngrx/entity";

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrl: './units.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class UnitsComponent implements OnInit, AfterViewInit  {
  store = inject(Store);
  router = inject(Router);
  unitService = inject(UnitsApiService)
  // units$ = this.store.select(unitsFeature.selectAll);
  units$ = this.store.select(unitsFeature.selectUnitsByAgeAndCost)
  isLoaded$ = this.store.select(unitsFeature.selectAllUnitsLoaded);
  error$ = this.store.select(unitsFeature.selectError);
  selectedUnit$ = this.store.select(unitsFeature.selectSelectedUnit);
  costs$ = this.store.select(unitsFeature.selectSelectedCost);
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource: MatTableDataSource<Unit> | any;
  ages = this.unitService.ages;
  selectedAge: { name: string; active: boolean } | undefined = this.unitService.ages.find(age => age.active);
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngAfterViewInit() {
  }

  changeCostHandler(event: any, cost: ICostDev): void {
    cost = this.unitService.updateCost(cost, {value:Number(event.target.value)});
    this.store.dispatch(UnitActions.updateCosts( { selectedCost: cost}));
  }
  setCostActive (event: any, cost: ICostDev): void {
    cost = this.unitService.updateCost(cost, {active:event.checked});
    if (!event.checked) {
      cost = this.unitService.updateCost(cost, {value:0});
    }
    this.store.dispatch(UnitActions.updateCosts( { selectedCost: cost}));
  }
  ageFilter(name:string) {
    this.selectedAge = this.ages.find(age => age.name === name);
    if(this.selectedAge) {
      this.store.dispatch(UnitActions.setAge({age:this.selectedAge.name}))
    }
  }
  navigateUnitDetail(unit: Unit) {
    this.store.dispatch(UnitActions.setUnit({unit}))
    this.router.navigateByUrl(`/units/${unit.id}`);
  }
  ngOnInit() {
    this.units$.pipe(debounceTime(100)).subscribe(units => {
      this.dataSource = new MatTableDataSource<Unit>(units);
      this.dataSource['paginator'] = this.paginator as MatPaginator;
    })
  }

  protected readonly String = String;
}
