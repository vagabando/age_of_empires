import { Component, ViewEncapsulation } from '@angular/core';
import {UiModule} from "fe-lib";
import {RouterLink} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatAnchor} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    UiModule,
    FlexLayoutModule,
    RouterLink,
    MatAnchor,
    MatToolbar,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {

}
