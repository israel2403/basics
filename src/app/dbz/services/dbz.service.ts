import { Injectable } from "@angular/core";
import { Character } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _characterList: Character[] = [
        {
            name: 'Goku',
            power: 15000
        },
        {
            name: 'Vegeta',
            power: 7500
        }
    ];

    get characterList(): Character[] {
        return [...this._characterList];
    }



    constructor() { }

    addCharacter(character: Character): void { 
        this._characterList.push(character);
    }
}