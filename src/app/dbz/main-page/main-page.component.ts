import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  public new: Character = {
    name: 'Masetro Roshi',
    power: 1000
  }

  public characterList: Character[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];

  addNewCharacter(character:Character) {
    this.characterList.push(character)
  }
}
