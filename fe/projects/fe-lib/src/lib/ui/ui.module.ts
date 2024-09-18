import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSliderModule} from "@angular/material/slider";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {
  MatCardModule,
} from "@angular/material/card";
import {MatFormField, MatInput, MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {
  MatCell,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatNoDataRow, MatRow,
  MatTable,
  MatTableModule
} from "@angular/material/table";
import {LayoutModule} from "@angular/cdk/layout";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatCard, MatCardHeader, MatCardContent} from "@angular/material/card";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import {MatPaginator} from "@angular/material/paginator";
import {MatList, MatListItem} from "@angular/material/list";
const modules = [
  MatList, MatListItem,
  MatPaginator,
  MatNoDataRow,
  MatColumnDef,
  MatHeaderCell,
  MatCell,
  MatHeaderRow,
  MatRow,
  MatCard, MatCardContent, MatCardHeader,
  MatTable, MatInput,
  MatFormField,
  CommonModule,
  MatIconModule,
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatRadioModule,
  MatProgressBar,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatToolbarModule ,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatTableModule,
  LayoutModule,
  FlexLayoutModule,
  FlexModule

];
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
