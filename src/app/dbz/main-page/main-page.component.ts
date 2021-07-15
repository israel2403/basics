import { Component} from '@angular/core';

interface Character  {
  name: string;
  power: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  public new: Character = {
    name: 'Trunks',
    power: 14000
  }

  add(){
   console.log(this.new);
  }

  changeName(event: any){
console.log(event);

  }

}
