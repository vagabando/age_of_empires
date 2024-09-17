import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {UiModule} from "fe-lib";
import {FlexModule} from "@angular/flex-layout";
import {MatAnchor} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {HeaderComponent} from "./partials/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UiModule, FlexModule, MatAnchor, MatToolbar, RouterLink, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fe';
}
