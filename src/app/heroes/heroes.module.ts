import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListHeroeComponent } from "./list-heroe/list-heroe.component";

@NgModule({
    declarations: [
        HeroeComponent,
        ListHeroeComponent
    ],
    exports: [
        ListHeroeComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule{}