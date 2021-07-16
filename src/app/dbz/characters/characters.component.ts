import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent {

  constructor(private dbzService:DbzService){}

  //@Input() characterList: Character[] = [];
  get characterList():Character[]{
    return this.dbzService.characterList;
  }

}
