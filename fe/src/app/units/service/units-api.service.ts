import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IResponse} from "fe-lib";
import {ICostDev, Unit} from "../++state/unit.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UnitsApiService {
  private readonly http = inject(HttpClient);
  ages: {name:string,active:boolean}[] = [
    {name:'All', active:true},
    {name:'Dark', active:false},
    {name:'Feudal', active:false},
    {name:'Castle', active:false},
    {name:'Imperial', active:false},
  ];
  getAll(): Observable<IResponse<Unit[]>> {
    return this.http.get<IResponse<Unit[]>>('http://127.0.0.1:2111/units');
  }
  updateCost (cost: ICostDev, updates: Partial<ICostDev>) {
    return { ...cost, ...updates };
  }
  removeItems(array: any[], item:any) {
    const index = array.indexOf(item);
    if (index > -1) {
      array.splice(index, 1);
    }
    return array;
  }
}

