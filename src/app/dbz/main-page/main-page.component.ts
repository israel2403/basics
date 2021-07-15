import { Component} from '@angular/core';
import { Character } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  public new: Character = {
    name: 'Trunks',
    power: 14000
  }

  public characterList:Character[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];

  add(){
    if (this.new.name.trim().length=== 0) {
      return;
    }
    this.characterList.push(this.new);
    this.new = {
      name: '',
      power: 0
    }
  }

}
