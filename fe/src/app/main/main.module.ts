import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import {UiModule} from "fe-lib";
import {FlexModule} from "@angular/flex-layout";
@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    UiModule,
    FlexModule,
  ]
})
export class MainModule { }
