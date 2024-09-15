import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSliderModule} from "@angular/material/slider";
import {MatMenuModule} from "@angular/material/menu";

const modules = [MatButtonModule,MatCheckboxModule,MatSliderModule, MatMenuModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules

  ],
  exports:[
    ...modules
  ]
})
export class UiModule { }
