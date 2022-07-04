import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card-tile',
  templateUrl: './card-tile.component.html',
  styleUrls: ['./card-tile.component.scss']
})
export class CardTileComponent implements OnInit {

  @Input()
  card!: CardItem;

  @Output()
  clickEmitter: EventEmitter<CardItem> = new EventEmitter<CardItem>()

  constructor() { }

  get image() {
    return `/assets/${this.card.imageUrl}`
  }

  ngOnInit(): void {
  }

  styleBackground() {
    return `--optionBackground:url('${this.image}'); --defaultBackground: ${this.card.defaultBackground};`;
  }

}

export interface CardItem {
  title: string;
  subtitle: string;
  imageUrl: string;
  defaultBackground: string;
  active: boolean;
}
