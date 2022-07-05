import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsScreenComponent } from './cards-screen/cards-screen.component';

@NgModule({
  declarations: [
    CardsScreenComponent,
  ],
  exports: [
    CardsScreenComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardsModule { }
