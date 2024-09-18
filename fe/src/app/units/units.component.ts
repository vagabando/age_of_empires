import {AfterViewInit, Component, inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Store} from "@ngrx/store";
import {UnitActions} from "./++state/unit.actions";
import {unitsFeature} from "./++state/unit.reducer";
import {UnitsApiService} from "./service/units-api.service";
import {MatTableDataSource} from "@angular/material/table";
import {ICost, Unit} from "./++state/unit.model";
import {MatPaginator} from "@angular/material/paginator";
import {debounceTime} from "rxjs";
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router} from "@angular/router";

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
  units$ = this.store.select(unitsFeature.selectFilteredUnits)
  isLoaded$ = this.store.select(unitsFeature.selectAllUnitsLoaded);
  error$ = this.store.select(unitsFeature.selectError);
  selectedUnit$ = this.store.select(unitsFeature.selectSelectedUnit);
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource: MatTableDataSource<Unit> | never | undefined;
  ages = this.unitService.ages;
  selectedAge: { name: string; active: boolean; } | undefined;
  @ViewChild('ageButtons') ageButtons: never | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | never | undefined;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngAfterViewInit() {
  }

  applyFilter() {
    // const filterValue = (event.target as HTMLInputElement).value;
    // if (this.dataSource) {
    //   this.dataSource.filter = filterValue.trim().toLowerCase();
    //   if (this.dataSource.paginator) {
    //     this.dataSource.paginator.firstPage();
    //   }
    // }
  }
  ageFilter(name:string) {
    this.selectedAge = this.ages.find(age => age.name === name);
    if(this.selectedAge){
      this.store.dispatch(UnitActions.setAge({age:this.selectedAge.name}))
    }
  }
  navigateUnitDetail(unit: Unit) {
    this.store.dispatch(UnitActions.setUnit({unit}))
    this.router.navigateByUrl(`/units/${unit.id}`);
  }
  ngOnInit() {
    this.units$.pipe(debounceTime(500)).subscribe(units => {
      this.dataSource = new MatTableDataSource<Unit>(units);
      this.dataSource['paginator'] = this.paginator as MatPaginator;
    })

  }
}
