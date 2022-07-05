import { Component, OnInit } from '@angular/core';
import {CardItem, PERSONS} from "./persons.model";

@Component({
  selector: 'app-cards-screen',
  templateUrl: './cards-screen.component.html',
  styleUrls: ['./cards-screen.component.scss']
})
export class CardsScreenComponent implements OnInit {

  cards: CardItem[] = PERSONS

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(card: CardItem) {
    this.cards.forEach( currentCard => {
      currentCard.active = currentCard.title == card.title
    })
  }

  image(card: CardItem) {
    return `/assets/${card.imageUrl}`
  }

  icon(card: CardItem) {
    return `/assets/${card.iconUrl}`
  }

  styleBackground(card: CardItem) {
    return `--imageBackground:url('${this.image(card)}'); --defaultColor: ${card.defaultBackground};`;
  }

}
