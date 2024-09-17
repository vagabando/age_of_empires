import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IResponse} from "fe-lib";
import {Unit} from "../++state/unit.model";

@Injectable({
  providedIn: 'root'
})
export class UnitsApiService {

  private readonly http = inject(HttpClient);

  getAll() {
    return this.http.get<IResponse<Unit[]>>('/api');
  }
  setUnits(units: Unit[]) {
    console.log(111,units);
  }
}

