import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UiModule} from "../../projects/fe-lib/src/lib/ui/ui.module";
import {ItemsModule} from "./items/items.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UiModule, ItemsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fe';
}
