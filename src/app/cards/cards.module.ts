import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsScreenComponent } from './cards-screen/cards-screen.component';
import { CardTileComponent } from './card-tile/card-tile.component';



@NgModule({
  declarations: [
    CardsScreenComponent,
    CardTileComponent
  ],
  exports: [
    CardsScreenComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardsModule { }
