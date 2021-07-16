import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  constructor() {
   }

  public new: Character = {
    name: 'Masetro Roshi',
    power: 1000
  }
}
