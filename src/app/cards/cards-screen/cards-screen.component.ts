import { Component, OnInit } from '@angular/core';
import {CardItem} from "../card-tile/card-tile.component";

@Component({
  selector: 'app-cards-screen',
  templateUrl: './cards-screen.component.html',
  styleUrls: ['./cards-screen.component.scss']
})
export class CardsScreenComponent implements OnInit {

  cards: CardItem[] = CARDS

  constructor() { }

  ngOnInit(): void {
    this.cards[0].active = true;
  }

  handleClick(card: CardItem) {
    this.cards.forEach( currentCard => {
      currentCard.active = currentCard.title == card.title
    })
  }

  image(card: CardItem) {
    return `/assets/${card.imageUrl}`
  }


  styleBackground(card: CardItem) {
    return `--optionBackground:url('${this.image(card)}'); --defaultBackground: ${card.defaultBackground};`;
  }
}

const CARDS: CardItem[] = [
  {
    title: "Luffy",
    subtitle: "Do chapeu de palha!",
    imageUrl: "luffy.webp",
    defaultBackground: "#ed5565",
    active: false
  },
  {
    title: "Zoro",
    subtitle: "O Rei do inferno!",
    imageUrl: "luffy.webp",
    defaultBackground: "#2ecc71",
    active: false
  },
]
