import { Component } from '@angular/core';

@Component({
  selector: 'app-list-heroe',
  templateUrl: './list-heroe.component.html'
})
export class ListHeroeComponent {
  public listHeroe: string[] = ['spiderman', 'iroman', 'Hulk', 'Thor', 'Captian America'];
  public deletedHeroe:string = '';

  public deleteHeroe():void{
      this.deletedHeroe = this.listHeroe.shift() || ''
  }
}
